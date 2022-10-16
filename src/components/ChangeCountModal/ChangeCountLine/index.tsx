import React from 'react';

import { Rb } from 'components/common/RadioBtn';

import { createCn } from 'utils/tools';

import { itemsEnding, packageEnding } from '../utils';

const cn = createCn('change-offer-count');

type LineProps = {
  value: number;
  isActive: boolean;
  onClick: (value: number) => void;
  countInShop: number;
  multiplicity: number;
};

export function ChangeCountLine(props: LineProps) {
  const {
    value, isActive, onClick, countInShop, multiplicity,
  } = props;

  const disable = value > countInShop;
  const items = `${value * multiplicity} ${itemsEnding(value * multiplicity)}`;
  const packages = multiplicity > 1 ? ` (${value} ${packageEnding(value)})` : '';
  const left = `осталось ${countInShop} шт`;
  return (
    <div
      className={cn('line', { disable, 'is-active': isActive })}
      onClick={() => {
        onClick(value);
      }} // можно каррировать функцию onClick тогда тут не потребуется калбэк
    >
      <Rb value={isActive} />
      {items}
      {packages}
      {disable && <span className={cn('line_max')}>{left}</span>}
    </div>
  );
}
