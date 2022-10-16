import React from 'react';

import RbFalse from 'assets/images/svg/rb-false.svg';
import RbTrue from 'assets/images/svg/rb-true.svg';

import './style.less';

export type RadioBtnProps = {
  value: boolean;
  onClick?: (value: boolean) => void;
};

// Странное название
export function Rb({ value, onClick }: RadioBtnProps) {
  return (
    <span
      className="rb"
      onClick={(e: React.MouseEvent) => {
        if (onClick) {
          onClick(!value);
        }
        e.preventDefault();
      }}
    >
      {value ? <RbTrue /> : <RbFalse />}
    </span>
  );
}
