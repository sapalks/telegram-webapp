import { AppVersion, CurrencyType } from 'store/model/worker';

export type Part = {
    id: string,
    name: string,
    offers: PartInLocalCart[],
}

export type Car = {
    model: string | null;
    vendor: string | null;
    vin: string | null;
    note: string | null;
}

export type Worker = {
    appVersion: AppVersion,
    currency: CurrencyType
}

export type PartInLocalCart = {
    id: string,
    article: string,
    vendor: string,
    quantity: number,
    countInShop: number,
    deliveryAt: number,
    images: string[],
    distributor: string,
    isAllowReturn: boolean,
    warehouse: string,
    selected: boolean,
    isAvailable: boolean,
    price: number,
    priceOffered: number,
    multiplicity: number,
    name: string,
}

export type AppInitialState = {
    viewportHeight: number,
    loadingRequests: string[],
    hasError: boolean,
    useOriginPrice: boolean,
    parts: Part[],
    car: Car | null,
    modalChangeCount: string | null,
    modalOfferDetails: string | null,
    modalPartTitle: string | null,
    modalRemoveOffers: string[],
    showApproveOrder: boolean;
    worker: Worker | null,
};
