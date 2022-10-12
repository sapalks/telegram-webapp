import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import BasketSvg from 'assets/images/svg/basket.svg';
import CloseEyeIcon from 'assets/images/svg/close-eye.svg';
import EyeIcon from 'assets/images/svg/eye.svg';

import { Currency } from 'components/common/Currency';

import { removeOfferModal } from 'store/app/actions';
import { AppDispatch } from 'store/index';

import { btn, createCn } from 'utils/tools';

import './style.less';

export type BasketFooterProps = {
  isOriginPrice: boolean;
  total: string;
  lastDelivery: string;
  selectedPartIds: string[];
  onChangePriceMode: () => void;
};

const cn = createCn('basket-footer');

export function BasketFooter({
  isOriginPrice,
  total,
  lastDelivery,
  selectedPartIds,
  onChangePriceMode,
}: BasketFooterProps) {
  const dispatch = useDispatch<AppDispatch>();
  const onRemove = useCallback(() => {
    dispatch(removeOfferModal(selectedPartIds));
  }, [selectedPartIds]);

  return (
    <>
      <div className={cn()}>
        <div className={cn('row')}>
          <span className={cn('remove')} onClick={onRemove}>
            <BasketSvg />
            Удалить все
          </span>
        </div>
        <div className={cn('row')}>
          <span className={cn('row_info')}>
            {isOriginPrice ? 'Итого к оплате:' : 'Итого с клиента:'}
          </span>
          <span className={cn('row_value')}>
            {total} <Currency size="14px" color="#000" />
          </span>
        </div>
        <div className={cn('row')}>
          <span className={cn('row_info')}>Последняя доставка:</span>
          <span className={cn('row_value')}>{lastDelivery}</span>
        </div>
        <div className={cn('btns')}>
          <button className={btn()} onClick={onChangePriceMode}>
            {isOriginPrice ? <CloseEyeIcon /> : <EyeIcon />}
            {isOriginPrice ? 'Скрыть цены закупки' : 'Посмотреть цены закупки'}
          </button>
        </div>
      </div>
    </>
  );
}
