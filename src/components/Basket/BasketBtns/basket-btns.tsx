import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StickyBottom } from 'components/StickyBottom';
import { Currency } from 'components/common/Currency';

import { approveOrder } from 'store/app/actions';
import { getParts, useOriginPrice } from 'store/app/selectors';
import { AppDispatch } from 'store/types';

import { toLocaleFixed } from 'utils/common';
import { btn, btnPrimary } from 'utils/tools';

import './style.less';

export function BasketBtns() {
  const dispatch = useDispatch<AppDispatch>();
  const parts = useSelector(getParts);
  const isOriginPrice = useSelector(useOriginPrice);
  const selectedParts = parts.map((part) => part.offers.filter((o) => o.selected)).flat();
  const isActive = selectedParts.length > 0;
  const wrapperClassName = `basket-btn__wrapper${!isActive ? ' basket-btn__disable' : ''}`;
  const { total, profit } = selectedParts.reduce(
    (value, offer) => ({
      total: value.total + offer.priceOffered * offer.quantity,
      profit: value.profit + (offer.priceOffered - offer.price) * offer.quantity,
    }),
    { total: 0, profit: 0 },
  );

  const profitStr = isOriginPrice && (
    <>
      <br />
      <small>
        прибыль = {toLocaleFixed(profit)}
        <Currency color="#fff" size="12px" />
      </small>
    </>
  );
  const approveSelectedParts = () => {
    dispatch(approveOrder(true));
  };

  return (
    <StickyBottom>
      <div className={wrapperClassName}>
        <div className={btn('row')}>
          <button className={btnPrimary()} onClick={approveSelectedParts}>
            <span>
              Оформить для клиента на {toLocaleFixed(total)}
              <Currency color="#fff" size="12px" />
            </span>
            {profitStr}
          </button>
        </div>
        <div className={btn('row')}>
          <button className={btn()}>Отправить корзину с ценами клиенту </button>
        </div>
      </div>
    </StickyBottom>
  );
}
