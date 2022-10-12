import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ChangeCountInput } from 'components/ChangeCountModal/ChangeCountInput';
import { ChangeCountLine } from 'components/ChangeCountModal/ChangeCountLine';
import { Modal } from 'components/Modal';

import { changeCountModal, changePartInLocalCart } from 'store/app/actions';
import { AppDispatch } from 'store/types';

import { createCn } from 'utils/tools';

import './style.less';

export type ChangeCountProps = {
  quantity: number;
  countInShop: number;
  offerId: string;
  multiplicity: number;
};

const cn = createCn('change-offer-count');

export function ChangeCount({
  quantity, countInShop, offerId, multiplicity,
}: ChangeCountProps) {
  const dispatch = useDispatch<AppDispatch>();
  const closeModal = () => {
    dispatch(changeCountModal(null));
  };

  const selectCount = useCallback(
    (value: number) => {
      dispatch(changePartInLocalCart({ id: offerId, quantity: value }));
    },
    [offerId],
  );

  useEffect(() => {
    const el = document.getElementsByClassName('change-offer-count__line_is-active')[0];
    el?.scrollIntoView({ block: 'center' });
  }, []);

  const maxPackage = Math.floor(countInShop / multiplicity);
  const needMoreBox = maxPackage + 1 > 100;
  const btnCount = needMoreBox ? 100 : maxPackage + 1;

  const additionalTitle = `упакованно по ${multiplicity} шт`;

  return (
    <Modal
      onClose={closeModal}
      title="Выберите кол-во"
      additional={multiplicity > 1 ? additionalTitle : ''}
    >
      <div className={cn()}>
        {new Array(btnCount).fill(1).map((_, index: number) => {
          const value = index + 1;
          return (
            <ChangeCountLine
              value={value}
              key={`select count${value}`}
              isActive={value === quantity}
              onClick={selectCount}
              countInShop={countInShop}
              multiplicity={multiplicity}
            />
          );
        })}
        {Boolean(needMoreBox) && (
          <ChangeCountInput
            multiplicity={multiplicity}
            countInShop={countInShop}
            onSubmit={selectCount}
          />
        )}
      </div>
    </Modal>
  );
}
