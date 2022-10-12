import React, { ChangeEvent, useState } from 'react';
import InputMask from 'react-input-mask';
import { useDispatch, useSelector } from 'react-redux';

import Bag from 'assets/images/svg/bag.svg';
import Shield from 'assets/images/svg/shield.svg';

import { StickyBottom } from 'components/StickyBottom';
import { Currency } from 'components/common/Currency';

import { approveOrder } from 'store/app/actions';
import { getParts } from 'store/app/selectors';
import { AppDispatch } from 'store/types';

import { toLocaleFixed, totalDeliveryDate } from 'utils/common';
import { btn, btnPrimary, createCn } from 'utils/tools';

const cn = createCn('basket-approve');

export function BasketApproveV2MonoWithClient() {
  const dispatch = useDispatch<AppDispatch>();
  const parts = useSelector(getParts);
  const [phone, setPhone] = useState('');

  const selectedParts = parts.map((part) => part.offers.filter((o) => o.selected)).flat();

  const total = toLocaleFixed(
    selectedParts.reduce((sum, offer) => sum + offer.quantity * offer.priceOffered, 0),
  );

  const lastDelivery = selectedParts.length
    ? totalDeliveryDate(Math.max(...selectedParts.map((o) => o.deliveryAt)))
    : '-';
  const onChangeMore = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value.replace(/\D/g, ''));
  };

  const approveSelectedParts = () => {
    dispatch(approveOrder(false));
  };

  return (
    <div className={cn()}>
      <p>Введите номер телефона клиента для оформления заказа:</p>
      <InputMask
        className={cn('phone')}
        mask="+7 (999) 999-99-99"
        placeholder="+7 (___) ___-__-__"
        type="tel"
        value={phone}
        onChange={onChangeMore}
      />
      <div className={cn('row')}>
        <span className={cn('row_info')}>Итого к оплате:</span>
        <span className={cn('row_value')}>
          {total} <Currency size="14px" color="#000" />
        </span>
      </div>
      <div className={cn('row', { small: true })}>
        <span className={cn('row_offer')}>защита от подделок</span>
        <Shield />
      </div>
      <div className={cn('row')}>
        <span className={cn('row_info')}>Последняя доставка:</span>
        <span className={cn('row_value')}>{lastDelivery}</span>
      </div>
      <div className={cn('row', { small: true })}>
        <span className={cn('row_offer')}>бесплатно</span>
        <Bag />
      </div>
      <StickyBottom>
        <div className={cn('btns')}>
          <div className={btn('row')}>
            <button className={btnPrimary({ disable: phone.length !== 11 })}>
              <span>
                Заказать на {total}
                <Currency color="#fff" size="12px" />
              </span>
            </button>
          </div>
          <div className={btn('row')}>
            <button className={btn()} onClick={approveSelectedParts}>
              Назад в корзину
            </button>
          </div>
        </div>
      </StickyBottom>
    </div>
  );
}
