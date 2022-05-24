export interface RandomNumberGenerator {
    getRandomInteger(lowerBound?: number, upperBound?: number): number;
    getRandomIntegers(numberOfRandomNumbersToGenerate: number, lowerBound?: number, upperBound?: number): number[];
    getRandomFloatingPointNumber(lowerBound?: number, upperBound?: number): number;
    getRandomFloatingPointNumbers(numberOfRandomNumbersToGenerate: number, lowerBound?: number, upperBound?: number): number[];
}