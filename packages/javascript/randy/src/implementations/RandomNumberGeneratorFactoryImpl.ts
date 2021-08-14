import { RandomNumberGeneratorFactory } from "../interfaces/RandomNumberGeneratorFactory";
import { RandomNumberGenerator } from "../interfaces/RandomNumberGenerator";
import { RandomNumberGeneratorImpl } from "../implementations/RandomNumberGeneratorImpl";
import { CryptoAPIWrapper } from "../interfaces/CryptoAPIWrapper";
import { MathAPIWrapper } from "../interfaces/MathAPIWrapper";
import { MathAPIWrapperImpl } from "../implementations/MathAPIWrapperImpl";
import { StructuredLogger } from "../../../structured-logger/src/interfaces/StructuredLogger";

export class RandomNumberGeneratorFactoryImpl implements RandomNumberGeneratorFactory {
    constructor(private cryptoAPIWrapper: CryptoAPIWrapper, private logger: StructuredLogger) {}
    public getRandomNumberGenerator(): RandomNumberGenerator {
        const mathAPIWrapper: MathAPIWrapper = new MathAPIWrapperImpl();
        return new RandomNumberGeneratorImpl(this.cryptoAPIWrapper, mathAPIWrapper, this.logger);
    }
}