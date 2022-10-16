// В тулките есть creteSlice данный способ создания стора
// позволяет избежать большого количетсва кода связанного с экшинами и редьюсерами
import { PayloadAction, createReducer } from '@reduxjs/toolkit';

import { AppInitialState } from 'store/app/types';
import {
  getOrder, viewportHeight, selectAll, selectPart,
  changeDisplayedPriceMode, changeCountModal, changePartInLocalCart,
  partTitleModal, removeOfferModal, offerDetailsModal, approveOrder, getWorker,
} from 'store/app/actions';
import { OrderInfo, Worker } from 'store/model';
import { toPart } from 'store/app/mapper';

const initialState: AppInitialState = {
  viewportHeight: 0,
  loadingRequests: [],
  useOriginPrice: false,
  parts: [],
  modalChangeCount: null,
  modalPartTitle: null,
  modalOfferDetails: null,
  hasError: false,
  modalRemoveOffers: [],
  car: null,
  showApproveOrder: false,
  worker: null,
};

export const appReducer = createReducer(initialState, {
  [getOrder.pending.type]: (state, _action) => {
    state.loadingRequests = [
      ...state.loadingRequests,
      getOrder.pending.type,
    ];
  },
  [getOrder.fulfilled.type]: (
    state: AppInitialState,
    action: PayloadAction<OrderInfo, string, { arg: string }>,
  ) => {
    const order = action.payload;
    state.loadingRequests = state.loadingRequests.filter((o) => o !== getOrder.pending.type);
    const parts = order.requests.map((r) => r.selectedParts)
      .flat()
      .filter((o) => o.pricedParts.some((p) => !p.orderedAt));
    state.parts = parts.map(toPart);
    const { car } = order;
    if (car) {
      state.car = {
        model: car.model,
        vendor: car.vendor,
        note: car.note,
        vin: car.vin || car.vin2 || null,
      };
    }
  },
  [getOrder.rejected.type]: (state: AppInitialState) => {
    state.loadingRequests = state.loadingRequests.filter((o) => o !== getOrder.pending.type);
    state.hasError = true;
  },
  [changePartInLocalCart.pending.type]: (state: AppInitialState) => {
    state.loadingRequests = [
      ...state.loadingRequests,
      changePartInLocalCart.pending.type,
    ];
    state.modalChangeCount = null;
  },
  [changePartInLocalCart.fulfilled.type]: (
    state: AppInitialState,
    { payload, meta: { arg } }:
      PayloadAction<boolean, string, ActionArg<{ id: string, quantity: number }>>,
  ) => {
    state.loadingRequests = state.loadingRequests
      .filter((o) => o !== changePartInLocalCart.pending.type);
    if (!payload) {
      return;
    }
    state.parts.forEach((part) => part.offers.forEach((offer) => {
      if (offer.id === arg.id) {
        offer.quantity = arg.quantity;
      }
    }));
  },
  [changePartInLocalCart.rejected.type]: (state: AppInitialState) => {
    state.loadingRequests = state.loadingRequests
      .filter((o) => o !== changePartInLocalCart.pending.type);
    state.hasError = true;
  },
  [getWorker.pending.type]: (state: AppInitialState) => {
    state.loadingRequests = [
      ...state.loadingRequests,
      getWorker.pending.type,
    ];
  },
  [getWorker.fulfilled.type]: (state: AppInitialState,
    { payload }: PayloadAction<Worker>) => {
    state.loadingRequests = state.loadingRequests
      .filter((o) => o !== getWorker.pending.type);
    state.worker = {
      appVersion: payload.company.appVersion,
      currency: payload.company.currency,
    };
  },
  [getWorker.rejected.type]: (state: AppInitialState) => {
    state.loadingRequests = state.loadingRequests
      .filter((o) => o !== getWorker.pending.type);
    state.hasError = true;
  },

  [viewportHeight.type]: (state: AppInitialState, action: PayloadAction<number>) => {
    state.viewportHeight = action.payload;
  },
  [selectAll.type]: (state: AppInitialState, action: PayloadAction<boolean>) => {
    state.parts.forEach((part) => part.offers.forEach((offer) => {
      if (offer.isAvailable) {
        offer.selected = action.payload;
      }
    }));
  },
  [selectPart.type]: (state: AppInitialState, { payload: { offerId, value } }: PayloadAction<{
    offerId: string, value: boolean
  }>) => {
    state.parts.forEach((part) => part.offers.forEach((offer) => {
      if (offer.isAvailable && offer.id === offerId) {
        offer.selected = value;
      }
    }));
  },
  [changeDisplayedPriceMode.type]: (state: AppInitialState) => {
    state.useOriginPrice = !state.useOriginPrice;
  },
  [changeCountModal.type]: (state: AppInitialState, { payload }: PayloadAction<string | null>) => {
    state.modalChangeCount = payload;
  },
  [partTitleModal.type]: (state: AppInitialState, { payload }: PayloadAction<string | null>) => {
    state.modalPartTitle = payload;
  },
  [offerDetailsModal.type]: (state: AppInitialState, { payload }: PayloadAction<string | null>) => {
    state.modalOfferDetails = payload;
  },
  [removeOfferModal.type]: (state: AppInitialState, { payload }: PayloadAction<string[]>) => {
    state.modalRemoveOffers = payload;
  },
  [approveOrder.type]: (state: AppInitialState, { payload }: PayloadAction<boolean>) => {
    state.showApproveOrder = payload;
  },
});
