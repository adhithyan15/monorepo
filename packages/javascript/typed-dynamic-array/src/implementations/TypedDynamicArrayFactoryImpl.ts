import { TypedDynamicArrayFactory } from '../interfaces/TypedDynamicArrayFactory';
import { TypedDynamicArray } from '../interfaces/TypedDynamicArray';
import { TypedDynamicArrayImpl } from './TypedDynamicArrayImpl';

export class TypedDynamicArrayFactoryImpl implements TypedDynamicArrayFactory {
    public createArray<T>(): TypedDynamicArray<T> {
        return new TypedDynamicArrayImpl<T>();
    }
}