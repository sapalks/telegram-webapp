import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Close from 'assets/images/svg/close.svg';

import { BasketApprove } from 'components/Basket/BasketApprove';
import { ChangeCount } from 'components/ChangeCountModal';
import { OfferDetails } from 'components/OfferDetailsModal';
import { PartTitle } from 'components/PartTitleModal';
import { RemovePart } from 'components/RemovePart';

import { getOrder, getWorker } from 'store/app/actions';
import {
  getCar,
  getChangeCountOffer,
  getOfferDetails,
  getPartForTitle,
  getParts,
  getRemovedOffers,
  showApprove,
} from 'store/app/selectors';
import { AppDispatch } from 'store/types';

import { getCarCardTitle } from 'utils/common';
import { createCn } from 'utils/tools';

import { BasketContent } from './basket-content';
import { BasketNoContent } from './basket-no-content';
import './style.less';
import { positionEnding } from './utils';

const cn = createCn('basket');

export type BasketProps = {
  orderId: string;
};

export function Basket({ orderId }: BasketProps) {
  const dispatch = useDispatch<AppDispatch>();
  const parts = useSelector(getParts);
  const car = useSelector(getCar);
  const isShowApprove = useSelector(showApprove);

  useEffect(() => {
    dispatch(getOrder(orderId));
    dispatch(getWorker());
  }, []);

  const offerForChangeCount = useSelector(getChangeCountOffer);
  const removedOffers = useSelector(getRemovedOffers);
  const offerDetail = useSelector(getOfferDetails);
  const partForTitleModal = useSelector(getPartForTitle);

  const haveOpenModal = Boolean(
    offerForChangeCount || removedOffers.length || offerDetail || partForTitleModal,
  );

  const haveParts = parts.length > 0;
  const selectedParts = parts.map((part) => part.offers.filter((o) => o.selected)).flat();

  return (
    <>
      <div className={cn('wrapper', { 'no-scroll': haveOpenModal })}>
        <div className={cn('close')}>
          Закрыть
          <Close />
        </div>
        <div className={cn()}>
          <h1>
            {!isShowApprove && (
            <>Корзина&nbsp;
              <small>
                {selectedParts.length} {positionEnding(selectedParts.length)}
              </small>
            </>
            )}
            {isShowApprove && 'Оформление заказа'}
            <br />
            <small>{getCarCardTitle(car)}</small>
          </h1>
          {!isShowApprove && haveParts && <BasketContent />}
          {!isShowApprove && !haveParts && <BasketNoContent />}
          {isShowApprove && <BasketApprove />}
        </div>
      </div>
      {offerForChangeCount && (
        <ChangeCount
          offerId={offerForChangeCount.id}
          quantity={offerForChangeCount.quantity}
          multiplicity={offerForChangeCount.multiplicity}
          countInShop={offerForChangeCount.countInShop}
        />
      )}
      {partForTitleModal && <PartTitle title={partForTitleModal.name} />}
      {offerDetail && <OfferDetails offer={offerDetail} />}
      {removedOffers.length > 0 && <RemovePart offers={removedOffers} />}
    </>
  );
}
