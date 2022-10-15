import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import Close from 'assets/images/svg/close.svg';

import { StickyBottom } from 'components/StickyBottom';

import { getViewportHeight } from 'store/app/selectors';

import { createCn } from 'utils/tools';

import './style.less';

export type ModalProps = {
  title: string;
  additional?: string;
  children?: JSX.Element | JSX.Element[];
  onClose?: () => void | Promise<void>;
};

const cn = createCn('modal');

function Modal(props: ModalProps) {
  const {
    onClose, children, title, additional,
  } = props;
  const height = useSelector(getViewportHeight);

  useEffect(() => {
    // этот код наверное больше не нужен
    // document.body.classList.add(cn('no-scroll'));
    // return () => {
    //   const haveOpenModal = !!document.getElementsByClassName(cn('overlay')).length;
    //   if (!haveOpenModal) {
    //     document.body.classList.remove(cn('no-scroll'));
    //   }
    // };
    document.documentElement.style.overflow = 'hidden'

    return () => {
      document.documentElement.style.overflow = 'unset'
    };
  }, []);

  return (
    <div className={cn('overlay')}>
      <div className={cn('background')} onClick={onClose} />
      <StickyBottom>
        <div className={cn('wrapper')} style={{ maxHeight: `${height + 30}px` }}>
          <div className={cn('header')}>
            <div className={cn('title')}>
              <h2>
                {title}
                {additional && <small>{additional}</small>}
              </h2>
            </div>
            <div className={cn('close')} onClick={onClose}>
              Закрыть
              <Close />
            </div>
          </div>
          <div className={cn('body')}>{children}</div>
        </div>
      </StickyBottom>
    </div>
  );
}

export { Modal };
