import React, { ComponentType } from 'react';
import { useSelector } from 'react-redux';

import { getViewportHeight } from 'store/app/selectors';

import './style.less';

export type SkickyProps = {
  children: JSX.Element | JSX.Element[];
};

export function StickyBottom({ children }: SkickyProps) {
  const height = useSelector(getViewportHeight);

  return (
    <div className="sticky-bottom" style={{ bottom: `${window.innerHeight - height}px` }}>
      {children}
    </div>
  );
}

export function withStickyBottom(Component: ComponentType) {
  return function WithTelegramWebApp(props: any) {
    return (
      <StickyBottom>
        <Component {...props} />
      </StickyBottom>
    );
  };
}
