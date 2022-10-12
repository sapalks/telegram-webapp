import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

import * as api from 'api/index';

export const getOrder = createAsyncThunk('app/getOrder', api.getOrder);

export const getWorker = createAsyncThunk('app/getWorkerInfo', api.getWorkerInfo);

export const changePartInLocalCart = createAsyncThunk('app/changePartInLocalCartCount',
  api.changePartInLocalCartCount);

export const viewportHeight = createAction<number>('app/viewportHeight');

export const selectAll = createAction<boolean>('app/selectAllParts');

export const selectPart = createAction<{ offerId: string, value: boolean }>('app/selectPart');

export const changeDisplayedPriceMode = createAction('app/changeDisplayedPriceMode');

export const changeCountModal = createAction<string | null>('app/changeCountModal');
export const partTitleModal = createAction<string | null>('app/partTitleModal');
export const offerDetailsModal = createAction<string | null>('app/offerDetailsModal');
export const removeOfferModal = createAction<string[]>('app/removeOfferModal');
export const approveOrder = createAction<boolean>('app/approveOrder');
