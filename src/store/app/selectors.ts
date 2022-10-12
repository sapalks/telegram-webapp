import { createSelector } from '@reduxjs/toolkit';
import { AppInitialState } from 'store/app/types';

import { Store } from 'store/types';

const appStoreSelector = (state: Store): AppInitialState => state.app;

export const getViewportHeight = createSelector(appStoreSelector, (state) => state.viewportHeight);
export const getParts = createSelector(appStoreSelector, (state) => state.parts);
export const useOriginPrice = createSelector(appStoreSelector, (state) => state.useOriginPrice);
export const getChangeCountOffer = createSelector(appStoreSelector,
  (state) => state.parts.map((o) => o.offers)
    .flat().find((o) => o.id === state.modalChangeCount) ?? null);
export const getPartForTitle = createSelector(appStoreSelector,
  (state) => state.parts.find((o) => o.id === state.modalPartTitle));
export const getOfferDetails = createSelector(appStoreSelector,
  (state) => state.parts.map((o) => o.offers)
    .flat().find((o) => o.id === state.modalOfferDetails) ?? null);
export const getRemovedOffers = createSelector(appStoreSelector,
  (state) => state.parts.map((o) => o.offers)
    .flat().filter((o) => state.modalRemoveOffers.includes(o.id)));
export const getCar = createSelector(appStoreSelector, (state) => state.car);
export const showApprove = createSelector(appStoreSelector, (state) => state.showApproveOrder);
export const getAppVersion = createSelector(appStoreSelector,
  (state) => state.worker?.appVersion ?? null);
export const getCurrency = createSelector(appStoreSelector,
  (state) => state.worker?.currency ?? null);
