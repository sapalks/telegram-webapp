import { createContext, useContext } from 'react';
import { Telegram } from './Telegram/Telegram';

export type TelegramWebAppModel = {
  app: Telegram.Unsafe.WebApp;
  startParam: string | null;
  isReady: boolean;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TelegramWebAppContext = createContext<TelegramWebAppModel>({} as any);

export function useStartParam() {
  const { startParam } = useContext(TelegramWebAppContext);
  return startParam;
}

export function useTelegramWebApp() {
  const { app } = useContext(TelegramWebAppContext);
  return app;
}

export function useIsTelegramWebAppReady() {
  const { isReady } = useContext(TelegramWebAppContext);
  return isReady;
}
