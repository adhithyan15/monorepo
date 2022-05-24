import { TypedArray } from "../definitions/TypedArray";

export interface CryptoAPIWrapper {
    isCryptoAPIAvailable(): boolean;
    isGetRandomValuesAvailable(): boolean;
    getRandomValues(inputArray: TypedArray): TypedArray; 
}