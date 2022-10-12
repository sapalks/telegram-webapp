import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { Modal } from 'components/Modal';

import { partTitleModal } from 'store/app/actions';
import { AppDispatch } from 'store/types';

import './style.less';

export type PartTitleProps = {
  title: string;
};

export function PartTitle(props: PartTitleProps) {
  const { title } = props;
  const dispatch = useDispatch<AppDispatch>();
  const onClose = useCallback(() => {
    dispatch(partTitleModal(null));
  }, []);
  return <Modal title={title} onClose={onClose} />;
}
