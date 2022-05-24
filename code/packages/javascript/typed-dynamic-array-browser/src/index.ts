import { TypedDynamicArrayFactory } from '../../typed-dynamic-array/src/interfaces/TypedDynamicArrayFactory';
import { TypedDynamicArrayFactoryImpl } from '../../typed-dynamic-array/src/implementations/TypedDynamicArrayFactoryImpl';

export function getTypedDynamicArrayFactory(): TypedDynamicArrayFactory {
    return new TypedDynamicArrayFactoryImpl();
}