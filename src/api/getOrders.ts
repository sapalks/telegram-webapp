/* eslint-disable max-len */
import { OrderInfoRequestedPart, OrderInfo } from 'store/model/order';
// import axios from 'axios';

const requests_:OrderInfoRequestedPart[] = [];
const requests = [
  {
    id: '2a37d942-73b5-4f4d-bc75-b28dbcac5ff0',
    parentId: '30f6a6ef-fb44-451b-bd32-cb2e050579bd',
    createdAt: 1661429234047,
    createdBy: '17581004-599c-4c45-a071-3acc9d10e0e6',
    firstStartedAt: 1661429235032,
    readyAt: 1661429262127,
    doneAt: 1661429262127,
    pricedAt: 1661429286293,
    setAsDifficultAt: null,
    text: 'Переподбор детали "Насос водяной (помпа)"',
    type: 'parts',
    sourceType: 'parts',
    state: 'done',
    selectedParts: [{
      id: '3c2111aa-6b08-477c-ad60-bd6bae9d53fc',
      parentId: null,
      articles: [{
        article: '96872702', vendor: 'General Motors', images: [], isMain: false,
      }, {
        article: '96352650', vendor: 'General Motors', images: [], isMain: false,
      }, {
        article: '96930074', vendor: 'General Motors', images: [], isMain: true,
      }],
      name: 'Насос охлаждающей жидкости ',
      displayingName: 'Насос охлаждающей жидкости Насос охлаждающей жидкости Насос охлаждающей жидкости ',
      quantity: 4,
      position: '18',
      schema: 'https://dev.back.tadam.ai/parts/catalog/schema/draw?schemaId=66ccc35e-de53-472e-bead-28fdbb81de6e&vin=XUFJF696JB3027823&p=18',
      isAdjoining: false,
      type: 'simple_part',
      pricingState: 'priced',
      pricedParts:
        [
          {
            id: '1a4dc40b-484a-4d53-90d8-32bca97e4305', article: 'CW0099', name: 'Стойка переднего стабилизатора L/R, M12X1.25, L=282mm, Russian Market | перед |', vendor: 'lynxauto1 lynxauto1 lynxauto1 lynxauto1 lynxauto1', images: ['https://img.1tv.com/img/2020-06-01/fmt_96_24_obl.jpg'], quantity: 4, countInShop: 8, createdAt: 1661758985948, orderedAt: null, deliveryType: null, price: 1487, priceWithExtra: 2082, priceInExist: 1762, priceAvg: 4164, priceOffered: 2082, deliveryAt: 1663257000000, deliveryMaxAt: 1663264800000, orderer: null, providerName: 'Росско (API)', distributorName: 'Росско (API)', formattedDistributorName: 'Росско', isAllowReturn: true, notes: '', photo: null, multiplicity: 1, isInCurrentCity: true, status: null, statusDescription: null, externalId: '3562730094', isOriginal: null, isAvailable: true, externalDistributorId: '1399259', isPartnerWarehouse: false,
          },
          {
            id: '35b78a32-2166-477c-be2d-41255d01b4f3', article: '50005076', name: 'Стойка переднего стабилизатора L/R, M12X1.25, L=282mm, Russian Market | перед |', vendor: 'kolbenschmidt', images: [], quantity: 4, countInShop: 4, createdAt: 1661695669629, orderedAt: null, deliveryType: null, price: 3232.93, priceWithExtra: 4203, priceInExist: 3626, priceAvg: 8406, priceOffered: 4203, deliveryAt: 1663339800000, deliveryMaxAt: 1663347600000, orderer: null, providerName: 'Росско (API)', distributorName: 'Росско (API)', formattedDistributorName: 'Росско', isAllowReturn: true, notes: '', photo: null, multiplicity: 1, isInCurrentCity: false, status: null, statusDescription: null, externalId: '3562730110', isOriginal: null, isAvailable: false, externalDistributorId: '1399259', isPartnerWarehouse: true,
          },
          {
            id: '0a4dc40b-484a-4d53-90d8-32bca97e4305', article: 'CW0099', name: 'Стойка переднего стабилизатора L/R, M12X1.25, L=282mm, Russian Market | перед |', vendor: 'lynxauto', images: ['https://photo.tvigle.ru/crop/245x350/res/tvigle/product/2019/12/12/0a1b8d3c-a5b8-45e7-8f21-a548a48a87dc.jpg'], quantity: 1, countInShop: 8, createdAt: 1661758985948, orderedAt: null, deliveryType: null, price: 1487, priceWithExtra: 2082, priceInExist: 1762, priceAvg: 4164, priceOffered: 2082, deliveryAt: 1663257000000, deliveryMaxAt: 1663264800000, orderer: null, providerName: 'Росско (API)', distributorName: 'Росско (API)', formattedDistributorName: 'Росско', isAllowReturn: true, notes: '', photo: null, multiplicity: 1, isInCurrentCity: true, status: null, statusDescription: null, externalId: '3562730094', isOriginal: null, isAvailable: true, externalDistributorId: '1399259', isPartnerWarehouse: false,
          },
        ],
      shortList: [],
      offersCount: 60,
      offersMinPrice: 25,
    }],
    comment: null,
    hasUnresolvedChat: false,
    hasUnresolvedApproving: false,
  },
  {
    id: '834db249-2fe5-451a-8e91-a098cbfdfcca', parentId: 'b2e3add7-ba25-4f18-8442-c4ad685fca93', createdAt: 1661695208574, createdBy: '17581004-599c-4c45-a071-3acc9d10e0e6', firstStartedAt: 1661695208990, readyAt: null, doneAt: null, pricedAt: null, setAsDifficultAt: null, text: 'Масляный фильтр', type: 'parts', sourceType: 'parts', state: 'ready', selectedParts: [], comment: null, hasUnresolvedChat: true, hasUnresolvedApproving: false,
  }, {
    id: '2ff5f3be-8cb3-4fda-8eac-dfe7f75fb728',
    parentId: null,
    createdAt: 1661948172309,
    createdBy: '17581004-599c-4c45-a071-3acc9d10e0e6',
    firstStartedAt: 1661948173098,
    readyAt: 1661948205237,
    doneAt: 1661948205237,
    pricedAt: 1661954460620,
    setAsDifficultAt: null,
    text: 'рычаг передней подвески',
    type: 'parts',
    sourceType: 'parts',
    state: 'done',
    selectedParts: [{
      id: '11d606f7-75b0-47f3-95f6-7bb7f7e3b214',
      parentId: null,
      articles: [{
        article: '13401129', vendor: 'General Motors', images: [], isMain: false,
      }, {
        article: '13463244', vendor: 'General Motors', images: [], isMain: true,
      }],
      name: 'Рычаг подвески левый передний ',
      displayingName: 'Рычаг подвески левый передний ',
      quantity: 1,
      position: '24',
      schema: 'https://dev.back.tadam.ai/parts/catalog/schema/draw?schemaId=f4b2f088-05c0-4fc8-8a3e-c2d1bf53455b&vin=XUFJF696JB3027823&p=24',
      isAdjoining: false,
      type: 'simple_part',
      pricingState: 'priced',
      pricedParts: [
        {
          id: '45b78a32-2166-477c-be2d-41255d01b4f3', article: '50005076', vendor: 'kolbenschmidt', name: 'Стойка переднего стабилизатора L/R, M12X1.25, L=282mm, Russian Market | перед |', images: [], quantity: 4, countInShop: 4, createdAt: 1661695669629, orderedAt: null, deliveryType: null, price: 3232.93, priceWithExtra: 4203, priceInExist: 3626, priceAvg: 8406, priceOffered: 4203, deliveryAt: 1663339800000, deliveryMaxAt: 1663347600000, orderer: null, providerName: 'Росско (API)', distributorName: 'Росско (API)', formattedDistributorName: 'Росско', isAllowReturn: true, notes: '', photo: null, multiplicity: 1, isInCurrentCity: false, status: null, statusDescription: null, externalId: '3562730110', isOriginal: null, isAvailable: false, externalDistributorId: '1399259', isPartnerWarehouse: true,
        },
      ],
      shortList: [],
      offersCount: 55,
      offersMinPrice: 25,
    }, {
      id: '28f00d92-d734-4d23-a1a6-d33dd254189b',
      parentId: null,
      articles: [{
        article: '13463245', vendor: 'General Motors', images: [], isMain: true,
      }],
      name: 'Рычаг передний правый в сборе ',
      displayingName: 'Рычаг передний правый в сборе ',
      quantity: 1,
      position: '24',
      schema: 'https://dev.back.tadam.ai/parts/catalog/schema/draw?schemaId=f4b2f088-05c0-4fc8-8a3e-c2d1bf53455b&vin=XUFJF696JB3027823&p=24',
      isAdjoining: false,
      type: 'simple_part',
      pricingState: 'priced',
      pricedParts: [
        {
          id: '2a4dc40b-484a-4d53-90d8-32bca97e4305', article: 'CW0099', name: 'Стойка переднего стабилизатора L/R, M12X1.25, L=282mm, Russian Market | перед |', vendor: 'lynxauto1 lynxauto1 lynxauto1 lynxauto1 lynxauto1', images: [], quantity: 4, countInShop: 8, createdAt: 1661758985948, orderedAt: null, deliveryType: null, price: 1487, priceWithExtra: 2082, priceInExist: 1762, priceAvg: 4164, priceOffered: 2082, deliveryAt: 1663257000000, deliveryMaxAt: 1663264800000, orderer: null, providerName: 'Росско (API)', distributorName: 'Росско (API)', formattedDistributorName: 'Росско', isAllowReturn: true, notes: '', photo: null, multiplicity: 1, isInCurrentCity: true, status: null, statusDescription: null, externalId: '3562730094', isOriginal: null, isAvailable: true, externalDistributorId: '1399259', isPartnerWarehouse: false,
        },
        {
          id: '3a4dc40b-484a-4d53-90d8-32bca97e4305', article: 'CW0099', name: 'Стойка переднего стабилизатора L/R, M12X1.25, L=282mm, Russian Market | перед |', vendor: 'lynxauto', images: [], quantity: 4, countInShop: 8, createdAt: 1661758985948, orderedAt: null, deliveryType: null, price: 1487, priceWithExtra: 2082, priceInExist: 1762, priceAvg: 4164, priceOffered: 2082, deliveryAt: 1663257000000, deliveryMaxAt: 1663264800000, orderer: null, providerName: 'Росско (API)', distributorName: 'Росско (API)', formattedDistributorName: 'Росско', isAllowReturn: true, notes: '', photo: null, multiplicity: 1, isInCurrentCity: true, status: null, statusDescription: null, externalId: '3562730094', isOriginal: null, isAvailable: true, externalDistributorId: '1399259', isPartnerWarehouse: false,
        },
      ],
      shortList: [],
      offersCount: 49,
      offersMinPrice: 36,
    }],
    comment: null,
    hasUnresolvedChat: false,
    hasUnresolvedApproving: false,
  },
  {
    id: '834db249-2fe5-451a-8e91-a098cbfdfcca', parentId: 'b2e3add7-ba25-4f18-8442-c4ad685fca93', createdAt: 1661695208574, createdBy: '17581004-599c-4c45-a071-3acc9d10e0e6', firstStartedAt: 1661695208990, readyAt: null, doneAt: null, pricedAt: null, setAsDifficultAt: null, text: 'Масляный фильтр', type: 'parts', sourceType: 'parts', state: 'ready', selectedParts: [], comment: null, hasUnresolvedChat: true, hasUnresolvedApproving: false,
  }, {
    id: '2ff5f3be-8cb3-4fda-8eac-dfe7f75fb728',
    parentId: null,
    createdAt: 1661948172309,
    createdBy: '17581004-599c-4c45-a071-3acc9d10e0e6',
    firstStartedAt: 1661948173098,
    readyAt: 1661948205237,
    doneAt: 1661948205237,
    pricedAt: 1661954460620,
    setAsDifficultAt: null,
    text: 'рычаг передней подвески',
    type: 'parts',
    sourceType: 'parts',
    state: 'done',
    selectedParts: [{
      id: '21d606f7-75b0-47f3-95f6-7bb7f7e3b214',
      parentId: null,
      articles: [{
        article: '13401129', vendor: 'General Motors', images: [], isMain: false,
      }, {
        article: '13463244', vendor: 'General Motors', images: [], isMain: true,
      }],
      name: 'Рычаг подвески левый передний ',
      displayingName: 'Рычаг подвески левый передний ',
      quantity: 1,
      position: '24',
      schema: 'https://dev.back.tadam.ai/parts/catalog/schema/draw?schemaId=f4b2f088-05c0-4fc8-8a3e-c2d1bf53455b&vin=XUFJF696JB3027823&p=24',
      isAdjoining: false,
      type: 'simple_part',
      pricingState: 'priced',
      pricedParts: [
        {
          id: '55b78a32-2166-477c-be2d-41255d01b4f3', article: '50005076', vendor: 'kolbenschmidt', name: 'Стойка переднего стабилизатора L/R, M12X1.25, L=282mm, Russian Market | перед |', images: [], quantity: 4, countInShop: 4, createdAt: 1661695669629, orderedAt: null, deliveryType: null, price: 3232.93, priceWithExtra: 4203, priceInExist: 3626, priceAvg: 8406, priceOffered: 4203, deliveryAt: 1663339800000, deliveryMaxAt: 1663347600000, orderer: null, providerName: 'Росско (API)', distributorName: 'Росско (API)', formattedDistributorName: 'Росско', isAllowReturn: true, notes: '', photo: null, multiplicity: 1, isInCurrentCity: false, status: null, statusDescription: null, externalId: '3562730110', isOriginal: null, isAvailable: false, externalDistributorId: '1399259', isPartnerWarehouse: true,
        },
      ],
      shortList: [],
      offersCount: 55,
      offersMinPrice: 25,
    }, {
      id: '38f00d92-d734-4d23-a1a6-d33dd254189b',
      parentId: null,
      articles: [{
        article: '13463245', vendor: 'General Motors', images: [], isMain: true,
      }],
      name: 'Рычаг передний правый в сборе ',
      displayingName: 'Еще какой то дрын ',
      quantity: 1,
      position: '24',
      schema: 'https://dev.back.tadam.ai/parts/catalog/schema/draw?schemaId=f4b2f088-05c0-4fc8-8a3e-c2d1bf53455b&vin=XUFJF696JB3027823&p=24',
      isAdjoining: false,
      type: 'simple_part',
      pricingState: 'priced',
      pricedParts: [
        {
          id: '6a4dc40b-484a-4d53-90d8-32bca97e4305', article: 'CW0099', name: 'Стойка переднего стабилизатора L/R, M12X1.25, L=282mm, Russian Market | перед |', vendor: 'lynxauto1 lynxauto1 lynxauto1 lynxauto1 lynxauto1', images: [], quantity: 1, countInShop: 8, createdAt: 1661758985948, orderedAt: null, deliveryType: null, price: 1487, priceWithExtra: 2082, priceInExist: 1762, priceAvg: 4164, priceOffered: 2082, deliveryAt: 1663257000000, deliveryMaxAt: 1663264800000, orderer: null, providerName: 'Росско (API)', distributorName: 'Росско (API)', formattedDistributorName: 'Росско', isAllowReturn: true, notes: '', photo: null, multiplicity: 1, isInCurrentCity: true, status: null, statusDescription: null, externalId: '3562730094', isOriginal: null, isAvailable: true, externalDistributorId: '1399259', isPartnerWarehouse: false,
        },
        {
          id: '7a4dc40b-484a-4d53-90d8-32bca97e4305', article: 'CW0099', name: 'Стойка переднего стабилизатора L/R, M12X1.25, L=282mm, Russian Market | перед |', vendor: 'lynxauto', images: [], quantity: 4, countInShop: 8, createdAt: 1661758985948, orderedAt: null, deliveryType: null, price: 1487, priceWithExtra: 2082, priceInExist: 1762, priceAvg: 4164, priceOffered: 2082, deliveryAt: 1663257000000, deliveryMaxAt: 1663264800000, orderer: null, providerName: 'Росско (API)', distributorName: 'Росско (API)', formattedDistributorName: 'Росско', isAllowReturn: true, notes: '', photo: null, multiplicity: 1, isInCurrentCity: true, status: null, statusDescription: null, externalId: '3562730094', isOriginal: null, isAvailable: true, externalDistributorId: '1399259', isPartnerWarehouse: false,
        },
      ],
      shortList: [],
      offersCount: 49,
      offersMinPrice: 36,
    }],
    comment: null,
    hasUnresolvedChat: false,
    hasUnresolvedApproving: false,
  },
  {
    id: '7501aa58-6391-49be-8528-dc7579df2cbc', parentId: null, createdAt: 1661425794446, createdBy: '17581004-599c-4c45-a071-3acc9d10e0e6', firstStartedAt: 1661425794726, readyAt: 1661425822435, doneAt: 1661426494884, pricedAt: null, setAsDifficultAt: null, text: 'схема передней подвески', type: 'schema', sourceType: 'schema', state: 'done', selectedParts: [], comment: null, hasUnresolvedChat: false, hasUnresolvedApproving: true,
  }, {
    id: '8f302574-46c5-4fd6-bf21-349fb9ff6292', parentId: '95a2215b-84fb-4960-8695-95f5911bcb8e', createdAt: 1661521166169, createdBy: '17581004-599c-4c45-a071-3acc9d10e0e6', firstStartedAt: 1661521166450, readyAt: 1661521181660, doneAt: null, pricedAt: null, setAsDifficultAt: null, text: 'Салонный фильтр', type: 'parts', sourceType: 'parts', state: 'wait', selectedParts: [], comment: null, hasUnresolvedChat: false, hasUnresolvedApproving: true,
  }];

// Моковое апи я бы предложил сделать через серви по типу json-placeholder,
// он позволит не писать подобные функции,
// а работать с запросами как с настоящими, использую схемы ответов как в бою.
// Также такой сервис позволит настроить обработку ошибок.
export const getOrder = async (_id: string): Promise<OrderInfo> => {
  const promise = new Promise((res) => {
    setTimeout(() => res({
      status: 'ok',
      body:
      {
        id: '647f8ed5-14cf-4c96-9628-f8246f441322',
        state: 'in-selection',
        car: {
          id: '37396e90-2b67-4419-81fb-8051ab0eaeb1', vin: 'XUFJF696JB3027823', vin2: null, model: 'Cruze NB (Europe Spec) (2010 - 2017)', vendor: 'chevrolet', carNumber: 'Бубубу', note: 'Бубубу',
        },
        client: null,
        name: '№17',
        isSingleOrder: false,
        createdAt: 1658407001891,
        updated: 1661948174200,
        orderedAt: null,
        scheduledDeliveryDateAt: null,
        deliveredDateAt: null,
        isArchived: false,
        creators: [{
          id: '17581004-599c-4c45-a071-3acc9d10e0e6', chatId: '223242871', name: 'Алла', phone: '79278185972',
        }],
        master: null,
        orderers: [],
        requests,
      },
    }), 500);
  });

  const { body } = (await promise) as { body: OrderInfo };

  return body;
};
