import { RandomNumberGenerator } from "../interfaces/RandomNumberGenerator";
import { CryptoAPIWrapper } from "../interfaces/CryptoAPIWrapper";
import { MathAPIWrapper } from "../interfaces/MathAPIWrapper";
import { StructuredLogger } from "../../../structured-logger/src/interfaces/StructuredLogger";

export class RandomNumberGeneratorImpl implements RandomNumberGenerator {
    private useCryptoAPI: boolean;
    private useMathAPI: boolean;
    private useHardCodedValues: boolean;
    constructor(private cryptoAPIWrapper: CryptoAPIWrapper, private mathAPIWrapper: MathAPIWrapper, private logger: StructuredLogger) {
        this.useCryptoAPI = this.cryptoAPIWrapper.isCryptoAPIAvailable() && this.cryptoAPIWrapper.isGetRandomValuesAvailable();
        this.useMathAPI = this.mathAPIWrapper.isMathAPISupported() && this.mathAPIWrapper.isMathRandomSupported();
        this.useHardCodedValues = !this.useCryptoAPI && !this.useMathAPI;
    }
    public getRandomInteger(lowerBound?: number, upperBound?: number): number {
        return 1;
    }
    public getRandomIntegers(numberOfRandomNumbersToGenerate: number, lowerBound?: number, upperBound?: number): number[] {
        return [1];
    }
    public getRandomFloatingPointNumber(lowerBound?: number, upperBound?: number): number {
        return 1;
    }
    public getRandomFloatingPointNumbers(numberOfRandomNumbersToGenerate: number, lowerBound?: number, upperBound?: number): number[] {
        return [1];
    }
}