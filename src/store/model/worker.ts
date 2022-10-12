export enum CurrencyType {
    RU = 'ru',
    KZ = 'kz',
}

export enum AppVersion {
    V1 = 'v1',
    V2 = 'v2',
    Partkom = 'partkom',
    Rossko = 'rossko',
    /** Special appVersion for СТО Траст */
    Trust = 'trust',
    Armtek = 'armtek',
    ProfitLiga = 'profit-liga',
    /** v2 version where all offers looks like from mono distributor */
    V2Mono = 'v2-mono',
    V2WithStorage = 'v2-with-storage',
    V2MonoWithClient = 'v2-mono-with-client',
}

export interface Worker {
    id: string;
    chatId: string;
    company: {
        name: string;
        currency: CurrencyType;
        appVersion: AppVersion
    }
}
