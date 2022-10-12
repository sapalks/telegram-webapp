import React from 'react';
import { useSelector } from 'react-redux';

import { BasketOfferPrice } from 'components/Basket/BasketOfferPrice';

import { useOriginPrice } from 'store/app/selectors';
import { PartInLocalCart } from 'store/app/types';

import { totalDeliveryDate } from 'utils/common';
import { btn, btnPrimary, createCn } from 'utils/tools';

import './style.less';

export type BasketOfferFooterProps = {
  offer: PartInLocalCart;
};

const cn = createCn('basket-offer-footer');
export function BasketOfferFooter(props: BasketOfferFooterProps) {
  const { offer } = props;
  const isOriginPrice = useSelector(useOriginPrice);
  const priceField: keyof PartInLocalCart = isOriginPrice ? 'price' : 'priceOffered';

  return (
    <div className={cn()}>
      {offer.isAvailable ? (
        <>
          <div className={cn('delivery')}>{totalDeliveryDate(offer.deliveryAt)}</div>
          <div className={cn('price')}>
            <BasketOfferPrice
              price={offer[priceField]}
              count={offer.quantity}
              activeColor={isOriginPrice ? '#31B545' : '#3F8CE4'}
            />
          </div>
        </>
      ) : (
        <>
          <button className={btnPrimary()}>Заменить</button>
          <button className={btn()}>Удалить</button>
        </>
      )}
    </div>
  );
}
