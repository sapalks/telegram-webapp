import React from 'react';

import { PartInLocalCart } from 'store/app/types';

import { createCn } from 'utils/tools';

import './style.less';

const cn = createCn('offer-list');
export type OfferListProps = {
  offers: PartInLocalCart[];
  showCount: boolean;
};

export function OfferList(props: OfferListProps) {
  const { offers, showCount } = props;
  return (
    <div className={cn()}>
      {offers.map((offer) => (
        <div key={`offer-list${offer.id}`} className={cn('row')}>
          <div className={cn('name', { 'no-count': !showCount })}>{`— ${offer.name}`}</div>
          {showCount && <div className={cn('count')}>{`, ${offer.quantity} шт`}</div>}
        </div>
      ))}
    </div>
  );
}
