import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Modal } from 'components/Modal';
import { StickyBottom } from 'components/StickyBottom';

import { removeOfferModal } from 'store/app/actions';
import { PartInLocalCart } from 'store/app/types';
import { AppDispatch } from 'store/types';

import { btn, btnPrimary, createCn } from 'utils/tools';

import './style.less';

const cn = createCn('remove-parts');

export type RemovePartProps = {
  offers: PartInLocalCart[];
};

export function RemovePart({ offers }: RemovePartProps) {
  const dispatch = useDispatch<AppDispatch>();
  const onClose = useCallback(() => {
    dispatch(removeOfferModal([]));
  }, []);

  return (
    <Modal onClose={onClose} title="Удалить детали?">
      <div className={cn()}>
        <p>Вы уверены, что хотите удалить детали из корзины?</p>
        <div className={cn('list')}>
          {offers.map((offer) => (
            <div key={`offer-list${offer.id}`} className={cn('row')}>
              <div className={cn('name')}>{`— ${offer.name}`}</div>
            </div>
          ))}
        </div>
        <StickyBottom>
          <div className={btn('row')}>
            <button className={btnPrimary()}>Да</button>
            <button className={btn()} onClick={onClose}>
              Нет
            </button>
          </div>
        </StickyBottom>
      </div>
    </Modal>
  );
}
