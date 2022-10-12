import React, {
  ComponentType, useEffect, useRef, useState,
} from 'react';

import { TelegramWebAppContext, TelegramWebAppModel } from './TelegramWebAppContext';

type TelegramWebAppProps = {
  children: JSX.Element;
  validateHash(hash: string): boolean | Promise<boolean>;
};

function TelegramWebAppScript({ children, onLoad }: { children: JSX.Element; onLoad: () => void }) {
  // inject on load, remove on unload (using effect), but only once per page
  useEffect(() => {
    const tgWebAppScript = document.createElement('script');
    tgWebAppScript.src = 'https://telegram.org/js/telegram-web-app.js';
    tgWebAppScript.onload = onLoad;

    document.head.appendChild(tgWebAppScript);
    // eslint-disable-next-line no-underscore-dangle, @typescript-eslint/no-explicit-any
    (window as any).__TELEGRAM_WEB_APP_SCRIPT_INJECTED__ = true;

    return () => {
      document.head.removeChild(tgWebAppScript);
      // eslint-disable-next-line no-underscore-dangle, @typescript-eslint/no-explicit-any
      (window as any).__TELEGRAM_WEB_APP_SCRIPT_INJECTED__ = false;
    };
  }, []);

  return children;
}

export function TelegramWebApp({ children, validateHash }: TelegramWebAppProps) {
  const [isReady, setIsReady] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const tgWebAppStartParamRef = useRef(
    new URLSearchParams(window.location.search).get('tgWebAppStartParam'),
  );

  const model: TelegramWebAppModel = {
    get app() {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return (window as any).Telegram?.WebApp;
    },
    startParam: tgWebAppStartParamRef.current ?? '',
    isReady,
  };

  const onReady = () => {
    const hashValidation = validateHash(model.app.initData);
    if (hashValidation instanceof Promise) {
      hashValidation.then(setIsValid).finally(() => setIsReady(true));
    } else {
      setIsValid(hashValidation);
      setIsReady(true);
    }
  };

  useEffect(() => {
    if (isReady && !isValid) throw new Error('Invalid hash');
  }, [isReady, isValid]);

  return (
    <TelegramWebAppScript onLoad={onReady}>
      <TelegramWebAppContext.Provider value={model}>{children}</TelegramWebAppContext.Provider>
    </TelegramWebAppScript>
  );
}

export function withTelegramWebApp(
  Component: ComponentType,
  contextProps: Omit<TelegramWebAppProps, 'children'>,
) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function WithTelegramWebApp(props: any) {
    return (
      <TelegramWebApp {...contextProps}>
        <Component {...props} />
      </TelegramWebApp>
    );
  };
}
