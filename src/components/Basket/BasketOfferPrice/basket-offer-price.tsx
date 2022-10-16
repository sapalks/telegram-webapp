import React from 'react';

import { Currency } from 'components/common/Currency';

import { toLocaleFixed } from 'utils/common';
import { createCn } from 'utils/tools';

import './style.less';

const cn = createCn('basket-offer-price');

export type BasketOfferPriceProps = {
  price: number;
  count: number;
  activeColor?: string;
};
export function BasketOfferPrice({ price, count, activeColor = '#3F8CE4' }: BasketOfferPriceProps) {
  const total = toLocaleFixed(price * count);
  const priveStr = toLocaleFixed(price);
  const calc = (
    <>
      {/* Магическое значение для цвета */}
      {priveStr} <Currency size="12px" color="#767676" /> х {count} шт =&nbsp;
    </>
  );
  return (
    <span className={cn('wrapper')}>
      {count > 1 && calc}
      <span className={cn('total')} style={{ color: activeColor }}>
        {total} <Currency color={activeColor} size="16px" />
      </span>
    </span>
  );
}
