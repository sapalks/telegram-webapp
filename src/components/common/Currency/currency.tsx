import React from 'react';
import { useSelector } from 'react-redux';

import Ruble from 'assets/images/svg/ruble.svg';
import Tenge from 'assets/images/svg/tenge.svg';

import { getCurrency } from 'store/app/selectors';
import { CurrencyType } from 'store/model/worker';

import './style.less';

export type CurrencyProps = {
  color: string;
  size: string;
};

export function Currency({ color, size }: CurrencyProps) {
  const currency = useSelector(getCurrency);
  const styleSvg = {
    fill: color,
    height: size,
  };
  const styleSpan = {
    height: size,
  };

  return (
    <span className="currency" style={styleSpan}>
      {currency === CurrencyType.KZ && <Tenge style={styleSvg} />}
      {currency === CurrencyType.RU && <Ruble style={styleSvg} />}
    </span>
  );
}
