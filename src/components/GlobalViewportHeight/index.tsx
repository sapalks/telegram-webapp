import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { TelegramEvents, useTelegramWebApp } from 'components/Telegram';

import { viewportHeight } from 'store/app/actions';
import { AppDispatch } from 'store/types';

import { VVP } from 'utils/tools';

export function GlobalViewportHeight() {
  const dispatch = useDispatch<AppDispatch>();
  const telegramApp = useTelegramWebApp();

  const onViewportChanged: TelegramEvents.Unsafe.Events.EventHandler<'viewportChanged'> = (_e: {
    isStateStable: boolean;
  }) => {
    dispatch(viewportHeight(telegramApp.viewportHeight));
  };

  useEffect(() => {
    if (!telegramApp) {
      return;
    }
    dispatch(viewportHeight(telegramApp.viewportHeight));
    telegramApp.onEvent('viewportChanged', onViewportChanged);
    return () => {
      telegramApp.offEvent('viewportChanged', onViewportChanged);
    };
  }, [telegramApp]);

  useEffect(() => {
    const vvp = new VVP();
    const onResize = () => {
      dispatch(viewportHeight((window as any).visualViewport.height));
    };

    (window as any).visualViewport.addEventListener('resize', onResize);
    return () => {
      (window as any).visualViewport.removeEventListener('resize', onResize);
      vvp.destroy();
    };
  }, []);

  return <></>;
}
