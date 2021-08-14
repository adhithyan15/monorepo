import { RandomNumberGeneratorFactory } from "../../randy/src/interfaces/RandomNumberGeneratorFactory";
import { RandomNumberGeneratorFactoryImpl } from "../../randy/src/implementations/RandomNumberGeneratorFactoryImpl";
import { StructuredLogger } from "../../structured-logger/src/interfaces/StructuredLogger";
import { BrowserCryptoAPIWrapper } from "./implementations/BrowserCryptoAPIWrapper";

export function getRandomNumberGeneratorFactory(
  logger: StructuredLogger
): RandomNumberGeneratorFactory {
  return new RandomNumberGeneratorFactoryImpl(
    new BrowserCryptoAPIWrapper(),
    logger
  );
}
