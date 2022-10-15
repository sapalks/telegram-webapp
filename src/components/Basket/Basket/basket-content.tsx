import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { BasketBtns } from 'components/Basket/BasketBtns';
import { BasketFooter } from 'components/Basket/BasketFooter';
import { BasketOffer } from 'components/Basket/BasketOffer';
import { Cb } from 'components/common/CheckBox';

import { changeDisplayedPriceMode, selectAll } from 'store/app/actions';
import { getParts, useOriginPrice } from 'store/app/selectors';
import { PartInLocalCart } from 'store/app/types';
import { AppDispatch } from 'store/types';

import { toLocaleFixed, totalDeliveryDate } from 'utils/common';
import { createCn } from 'utils/tools';

const cn = createCn('basket');

export function BasketContent() {
  const dispatch = useDispatch<AppDispatch>();
  const parts = useSelector(getParts);
  const isOriginPrice = useSelector(useOriginPrice);

  const allIsSelected = parts.every((part) =>
    part.offers.every((o) => o.selected || !o.isAvailable));

  const onSelectAll = useCallback(() => {
    dispatch(selectAll(!allIsSelected));
  }, [allIsSelected]);

  const priceField: keyof PartInLocalCart = isOriginPrice ? 'price' : 'priceOffered';

  const selectedParts = parts.map((part) => part.offers.filter((o) => o.selected)).flat();

  const total = toLocaleFixed(
    selectedParts.reduce((sum, offer) => sum + offer.quantity * offer[priceField], 0),
  );

  const lastDelivery = selectedParts.length
    ? totalDeliveryDate(Math.max(...selectedParts.map((o) => o.deliveryAt)))
    : '-';

  const changePriceMode = () => {
    dispatch(changeDisplayedPriceMode());
  };

  const partBoxs = parts.map((part) => { // обычно такой код выносят в отдельный компонент и следят, чтобы он не выполнялся, когда список не меняется, чтобы избежать лишний ререндр
    const offers = part.offers.map((o) => <BasketOffer offer={o} key={o.id} />);
    return (
      <div key={part.id} className={cn('part')}>
        <h2>{part.name}</h2>
        {offers}
      </div>
    );
  });

  return (
    <>
      <div className={cn('header')}>
        <div className={cn('header_select-all')} onClick={onSelectAll}>
          <Cb value={allIsSelected} />
          Выбрать все
        </div>
      </div>
      {partBoxs}
      <BasketFooter
        total={total}
        lastDelivery={lastDelivery}
        onChangePriceMode={changePriceMode}
        selectedPartIds={selectedParts.map((o) => o.id)}
        isOriginPrice={isOriginPrice}
      />
      <BasketBtns />
    </>
  );
}
