import { RandomNumberGeneratorFactory } from "../../randy/src/interfaces/RandomNumberGeneratorFactory";
import { RandomNumberGeneratorFactoryImpl } from "../../randy/src/implementations/RandomNumberGeneratorFactoryImpl";
import { NodeCryptoAPIWrapper } from "./implementations/NodeCryptoAPIWrapper";
import { StructuredLogger } from "../../structured-logger/src/interfaces/StructuredLogger";

export function getRandomNumberGeneratorFactory(
  logger: StructuredLogger
): RandomNumberGeneratorFactory {
  return new RandomNumberGeneratorFactoryImpl(
    new NodeCryptoAPIWrapper(logger),
    logger
  );
}
