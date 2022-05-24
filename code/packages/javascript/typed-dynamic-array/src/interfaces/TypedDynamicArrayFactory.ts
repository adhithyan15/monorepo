import { TypedDynamicArray } from './TypedDynamicArray';

export interface TypedDynamicArrayFactory {
    createArray<T>(): TypedDynamicArray<T>;
}