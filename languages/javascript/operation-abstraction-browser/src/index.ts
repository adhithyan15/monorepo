import { OperationFactory } from "../../operation/src/interfaces/OperationFactory";
import { OperationFactoryImpl } from "../../operation/src/implementations/OperationFactoryImpl";
import { StructuredLogger } from "../../structured-logger/src/interfaces/StructuredLogger";

export function getOperationFactory(
  logger: StructuredLogger
): OperationFactory {
  return new OperationFactoryImpl(logger);
}
