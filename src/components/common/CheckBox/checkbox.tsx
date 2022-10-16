import React from 'react';

import CbFalse from 'assets/images/svg/cb-false.svg';
import CbTrue from 'assets/images/svg/cb-true.svg';

import './style.less';

export type CheckBoxPops = {
  value: boolean;
  onClick?: (e: React.MouseEvent, value: boolean) => void;
};

// Старнное название для компанента, так экспорт именовынный могут быть сложности при чтении
export function Cb({ value, onClick }: CheckBoxPops) {
  return (
    <span
      className="cb"
      onClick={(e: React.MouseEvent) => {
        if (onClick) {
          onClick(e, !value);
        }
      }}
    >
      {value ? <CbTrue /> : <CbFalse />}
    </span>
  );
}
