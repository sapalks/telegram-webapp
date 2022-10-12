import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import YandexImage from 'assets/images/svg/yandex-image.svg';

import { BasketOfferFooter } from 'components/Basket/BasketOfferFooter';
import { Modal } from 'components/Modal';
import { StickyBottom } from 'components/StickyBottom';

import { offerDetailsModal, removeOfferModal } from 'store/app/actions';
import { PartInLocalCart } from 'store/app/types';
import { AppDispatch } from 'store/types';

import { btn, btnPrimary, createCn } from 'utils/tools';

import './style.less';

const cn = createCn('offer-details');

export type OfferDetailsProps = {
  offer: PartInLocalCart;
};

export function OfferDetails(props: OfferDetailsProps) {
  const { offer } = props;
  const {
    vendor,
    article,
    images: [image],
    name,
  } = offer;
  const dispatch = useDispatch<AppDispatch>();
  const onClose = useCallback(() => {
    dispatch(offerDetailsModal(null));
  }, []);
  const onRemove = useCallback(() => {
    dispatch(removeOfferModal([offer.id]));
  }, [offer.id]);

  const searchUrl = `https://yandex.ru/images/search?text=${encodeURIComponent(
    `${vendor} ${article}`,
  )}`;

  return (
    <Modal title={vendor} onClose={onClose}>
      <div className={cn()}>
        {image ? (
          <div className={cn('image')}>
            <img src={image} alt="" />
          </div>
        ) : (
          <div className={cn('link')}>
            <a target="_blank" href={searchUrl} rel="noreferrer" className={btn()}>
              <YandexImage />
              Найти фото на Яндекс Картинках
            </a>
          </div>
        )}
        <p>{name}</p>
        <p>
          <small>В корзине: </small>
        </p>
        <BasketOfferFooter offer={offer} />
        <StickyBottom>
          <div className={btn('row')}>
            <button className={btnPrimary()}>Заменить</button>
            <button className={btn()} onClick={onRemove}>
              Удалить
            </button>
          </div>
        </StickyBottom>
      </div>
    </Modal>
  );
}
