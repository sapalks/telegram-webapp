export interface ApiWrapper<T> {
    status: string;
    body: T | string;
}

export { OrderInfo } from './order';

export { Worker } from './worker';
