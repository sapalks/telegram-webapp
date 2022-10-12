export enum OrderStateType {
    IN_SELECTION = 'in-selection',
    SELECTED = 'selected',
    PRICED = 'priced',
    IN_CART = 'in-cart',
    ORDERED = 'ordered',
    DELIVERED = 'delivered',
}

export interface OrderItemCar {
    id: string,
    vin: string | null,
    vin2: string | null,
    model: string | null,
    vendor: string | null,
    carNumber: string | null,
    note: string | null,
}

export interface OrderItemClient {
    name: string | null,
    phones: string[] | null
}

export interface OrderItemWorker {
    id: string,
    chatId: string | null,
    name: string | null,
    phone: string | null,
}

export enum TaskTypes {
    /** Request to particular spare part */
    PARTS = 'parts',
    /** Request to get schema */
    SCHEMA = 'schema',
    /** Choosing parts on schema */
    PARTS_ON_SCHEMA = 'parts-on-schema',
    /** Recomendation from mechanic */
    RECOMMENDATIONS = 'recommendations',
    /** Request from our manager to rephrase task */
    REPHRASE = 'rephrase',
    /** Choosing priced parts (which are compatible to requested part) */
    CHOOSING_PRICED_PARTS = 'choosing_priced_parts',
    /** kit of some parts, for example: "Комплект ГРМ". Works like PARTS in general */
    KIT = 'kit',
}

export enum TaskStates {
    /** nothing done. looking for processing (by our manager) */
    INIT = 'init',
    /** request was marked as 'bad' by bot (some error in data or processing) */
    BAD = 'bad',
    /** request was marked as wrong by user */
    ERROR = 'error',
    /** task ready to sent to user */
    READY = 'ready',
    /** sent to queue and is waiting approving or answer from user */
    WAIT = 'wait',
    /** request was processed totally */
    DONE = 'done',
    /** user and manager are in chat state */
    CHAT = 'chat',
    /** skipped by user (user doesn't need this task) */
    SKIPPED = 'skipped',
    /** request should be processed (skipped) */
    PLAIN = 'plain',
}

export interface OrderInfoSelectedPartArticle {
    article: string | null;
    vendor: string | null;
    images: string[];
    isMain: boolean;
}

export enum TaskPartType {
    /** Regular part found for request */
    SimplePart = 'simple_part',
    /** Parent part that includes requested child */
    ParentPart = 'parent_part',
    /** Part found by client's request from as crosses set from parent part */
    ChildPart = 'child_part',
    /** Kit assembled from single parts */
    Kit = 'kit',
    /** An item which is one of parts in the requested kit */
    KitItem = 'kit_item',
}

export enum TaskPartPricingState {
    WAITING = 'waiting',
    SENT_TO_QUEUE = 'sent_to_queue',
    IN_PRICING = 'in_pricing',
    PRICED = 'priced',
}

export enum DeliveryType {
    /** "самовывоз" */
    Pickup = 'pickup',
    Standard = 'standard',
    Express = 'express',
}

export enum PartInCartStatus {
    Ordered = 'ordered',
    Delivered = 'delivered',
    CanceledByUser = 'cancel_by_user',
    CanceledByProvider = 'cancel_by_provider',
    PartialCanceledByProvider = 'partial_cancel_by_provider',
    Returned = 'returned',
    Blocked = 'blocked',
    ManualPurchaseWithSettings = 'manual_purchase_with_settings',
}

export interface OrderInfoPartInLocalCart {
    /** PartsInLocalCart.id  */
    id: string;
    article: string;
    vendor: string;
    images: string[];
    quantity: number;
    countInShop: number;
    createdAt: number;
    /** date of ordering (if ordered) */
    orderedAt: number | null;
    deliveryType: DeliveryType | null;
    /** current price */
    price: number;
    priceWithExtra: number;
    /** parsed price from exist */
    priceInExist: number | null;
    /** average price from all offers with selected deadline */
    priceAvg: number | null;
    /** price which we offered to user */
    priceOffered: number;
    deliveryAt: number | null;
    deliveryMaxAt: number | null;
    orderer: OrderItemWorker | null;
    providerName: string | null;
    distributorName: string;
    /** accountId (distributor extenal id) from qwep */
    externalDistributorId: string;
    formattedDistributorName: string;
    /** it shows can we return part to supplier or can't */
    isAllowReturn: boolean;
    /** notes which can describe part of some conditions */
    notes: string | null;
    /** link to part's photo */
    photo: string | null;
    /** packing size */
    multiplicity: number;
    /** it means that current part is in the same
     * city where is the company which requested pricing  */
    isInCurrentCity: boolean;
    /** status discription sorted for our logic */
    status: PartInCartStatus | null;
    /** status discription from distriutor in qwep */
    statusDescription: string | null;
    /** id in external system (for example qwep) which help to order it */
    externalId: string | null;
    isOriginal: boolean | null;
    isAvailable: boolean;
    isPartnerWarehouse: boolean;
    warehouse: string | null;
    name: string;
}

export interface ShortListItemModel {
    id: string,
    taskPartId: string,
    article: string,
    brand: string,
    supplierName: string | null,
    price: number,
    priceWithExtra: number,
    /** parsed price from exist */
    priceInExist: number | null,
    /** average price from all offers with selected deadline */
    priceAvg: number | null,
    /** price which we offered to user */
    priceOffered: number | null,
    deliveryDate: number | null,
    deliveryMaxDate: number | null,
    /** it shows can we return part to supplier or can't */
    isAllowReturn: boolean | null,
    /** notes which can describe part of some conditions */
    notes: string | null,
    /** link to part's photo */
    photo: string | null,
    /** packing size */
    multiplicity: number,
    isRecomended: boolean,
    /** it means that current part is in the same
     * city where is the company which requested pricing  */
    isInCurrentCity: boolean,
    isOriginal: boolean,
    quantity: number,
}

export interface OrderInfoSelectedPart {
    /** TaskPart.id */
    id: string;
    parentId: string | null;
    articles: OrderInfoSelectedPartArticle[];
    /** name of selected part (usually gets by article from exist or another shop) */
    name: string | null;
    /** name which we want to show for current part. It can be name of part, it can be request */
    displayingName: string;
    quantity: number;
    position: string;
    schema: string;
    isAdjoining: boolean;
    /** type of taskPart - calculating on taskType, parentId, articles, etc. */
    type: TaskPartType;

    /** it means that we've got all prices of this spare part */
    pricingState: TaskPartPricingState;
    pricedParts: OrderInfoPartInLocalCart[];
    shortList: ShortListItemModel[]; //  purchasedParts:

    /** count of offers which we got during pricing */
    offersCount: number | null;
    /** min price of offers which we got during pricing */
    offersMinPrice: number | null;
}

export interface OrderInfoRequestedPart {
    /** Task.id */
    id: string,
    parentId: string | null,
    createdAt: number,
    /** id of worker who created task */
    createdBy: string | null,
    /** datetime when first processing was started */
    firstStartedAt: number | null,
    readyAt: number | null,
    doneAt: number | null,
    pricedAt: number | null,
    /** time when current task was set as difficult (if it was) */
    setAsDifficultAt: number | null,
    text: string,
    type: TaskTypes,
    sourceType: TaskTypes | null,
    state: TaskStates,
    selectedParts: OrderInfoSelectedPart[],
    comment: string | null,
    /** shows that this task has unresolved chat */
    hasUnresolvedChat: boolean | null,
    /** shows that this task has unresolved parts or schema approving */
    hasUnresolvedApproving: boolean | null,
}

export interface OrderInfo {
    id: string;
    state: OrderStateType;
    car: OrderItemCar | null;
    client: OrderItemClient | null;
    name: string;
    isSingleOrder: boolean;
    createdAt: number;
    updated: number;
    orderedAt: number | null;
    /** date when all ordered parts will be delivered */
    scheduledDeliveryDateAt: number | null;
    /** date when order's parts were delivered */
    deliveredDateAt: number | null;
    isArchived: boolean;

    /** who created this requests */
    creators: OrderItemWorker[];
    /** who is in charge on this order */
    master: OrderItemWorker | null;
    /** who confirmed order and pushed button "order" */
    orderers: OrderItemWorker[];
    /** requested parts */
    requests: OrderInfoRequestedPart[];
}
