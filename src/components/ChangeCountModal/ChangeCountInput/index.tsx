import React, {
  ChangeEvent, useCallback, useRef, useState,
} from 'react';

import { btnPrimary, createCn } from 'utils/tools';

const cn = createCn('change-offer-count');
type ChangeCountInputProps = {
  countInShop: number;
  multiplicity: number;
  onSubmit: (value: number) => void;
};
export function ChangeCountInput(props: ChangeCountInputProps) {
  const { countInShop, multiplicity, onSubmit } = props;
  const [more, setMore] = useState('');

  const invalidMoreValue = Number(more) > countInShop || Number(more) % multiplicity !== 0;

  const submitCount = useCallback(() => {
    if (invalidMoreValue) {
      return;
    }
    onSubmit(Number(more));
  }, [more, invalidMoreValue]);

  const inputEl = useRef<HTMLInputElement>(null);

  const onFocusWithDelay = useCallback(() => {
    setTimeout(() => {
      inputEl.current?.scrollIntoView();
    }, 500);
  }, [inputEl]);

  const onChangeMore = (e: ChangeEvent<HTMLInputElement>) => {
    setMore(e.target.value.replace(/\D/g, ''));
  };

  const lost = Number(more) % multiplicity !== 0 && multiplicity > 1
    ? `введите количество кратное ${multiplicity}`
    : `на складе осталось ${countInShop} шт`;

  return (
    <div className={cn('more')}>
      <div>
        <input
          ref={inputEl}
          onFocus={onFocusWithDelay}
          type="number"
          placeholder="Введите количество"
          value={more}
          onChange={onChangeMore}
        />
        <small>{lost}</small>
      </div>
      <button
        className={btnPrimary({ disable: invalidMoreValue })}
        onClick={submitCount}
      >
        Сохранить
      </button>
    </div>
  );
}
