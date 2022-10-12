import { OrderInfoPartInLocalCart, OrderInfoSelectedPart } from 'store/model/order';
import { Part, PartInLocalCart } from 'store/app/types';

export function toPartInLocalCart(model: OrderInfoPartInLocalCart): PartInLocalCart {
  const data: PartInLocalCart = {
    id: model.id,
    article: model.article,
    vendor: model.vendor,
    quantity: model.quantity,
    countInShop: model.countInShop,
    images: model.images,
    deliveryAt: model.deliveryMaxAt || model.deliveryAt || model.createdAt,
    isAllowReturn: model.isAllowReturn,
    distributor: model.formattedDistributorName,
    warehouse: model.warehouse || '',
    isAvailable: model.isAvailable,
    price: model.price,
    priceOffered: model.priceOffered,
    selected: false,
    multiplicity: model.multiplicity,
    name: model.name,
  };

  return data;
}

export function toPart(model: OrderInfoSelectedPart): Part {
  const data: Part = {
    id: model.id,
    name: model.displayingName.trim(),
    offers: model.pricedParts.filter((o) => !o.orderedAt).map(toPartInLocalCart),
  };

  return data;
}
