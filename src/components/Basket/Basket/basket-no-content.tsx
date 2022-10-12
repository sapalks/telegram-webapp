import React from 'react';

import Basket from 'assets/images/svg/big-basket.svg';

import { btnPrimary, createCn } from 'utils/tools';

const cn = createCn('basket');

export function BasketNoContent() {
  return (
    <>
      <div className={cn('no-content')}>
        <Basket />
        <b>Тут пусто</b>
        <br />
        Чтобы оформить заказ, добавьте в корзину запчасти из обращения
        <button className={btnPrimary()}>Перейти к обращению</button>
      </div>
    </>
  );
}
