import React, { MouseEvent, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Arrows from 'assets/images/svg/arrows.svg';
import Info from 'assets/images/svg/info.svg';
import Photo from 'assets/images/svg/photo.svg';

import { BasketOfferFooter } from 'components/Basket/BasketOfferFooter';
import { Cb } from 'components/common/CheckBox';

import { changeCountModal, offerDetailsModal, selectPart } from 'store/app/actions';
import { PartInLocalCart } from 'store/app/types';
import { AppDispatch } from 'store/types';

import { createCn } from 'utils/tools';

import './style.less';

export type BasketOfferProps = {
  offer: PartInLocalCart;
};

const cn = createCn('basket-offer');

export function BasketOffer({ offer }: BasketOfferProps) {
  const dispatch = useDispatch<AppDispatch>();

  const onSelect = useCallback(
    (e: MouseEvent, value: boolean) => {
      dispatch(selectPart({ offerId: offer.id, value }));
      e.stopPropagation();
    },
    [offer.id],
  );

  const openChangeCountModal = useCallback(() => {
    dispatch(changeCountModal(offer.id));
  }, [offer.id]);

  const openDetailOfferModal = useCallback(() => {
    if (!offer.isAvailable) {
      return;
    }
    dispatch(offerDetailsModal(offer.id));
  }, [offer.id, offer.isAvailable]);

  return (
    <div
      className={cn('wrapper', { 'not-available': !offer.isAvailable })}
      onClick={openDetailOfferModal}
    >
      <div className={cn('top')}>
        <div className={cn('title')}>
          <Cb onClick={onSelect} value={offer.selected} />
          <span className={cn('title-content')}>{offer.vendor}</span>
          <span className={cn('info')}>{offer.images.length ? <Photo /> : <Info />}</span>
        </div>
        {offer.isAvailable ? (
          <div
            className={cn('count')}
            onClick={(e) => {
              e.stopPropagation();
              openChangeCountModal();
            }} // Удонее когда такие калбэки вынесены из jsx + функцию можно оптимизировать, в разметке такое сделать не получится
          >
            <div className={cn('count-value')}>{offer.quantity}</div>
            <Arrows />
          </div>
        ) : (
          <div className={cn('no-count')}>Нет в наличии</div>
        )}
      </div>
      <BasketOfferFooter offer={offer} />
    </div>
  );
}
