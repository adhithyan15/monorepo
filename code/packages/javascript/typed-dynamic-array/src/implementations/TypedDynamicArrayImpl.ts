import { TypedDynamicArray } from '../interfaces/TypedDynamicArray';

export class TypedDynamicArrayImpl<T> implements TypedDynamicArray<T> {
    private elements: T[];
    constructor() {
        this.elements = [];
    }
}