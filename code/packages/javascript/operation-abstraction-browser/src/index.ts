import { OperationFactory } from "../../operation/src/interfaces/OperationFactory";
import { OperationFactoryImpl } from "../../operation/src/implementations/OperationFactoryImpl";
import { StructuredLogger } from "../../structured-logger/src/interfaces/StructuredLogger";
import { StopWatchFactory } from "../../stopwatchy/src/interfaces/StopWatchFactory";
import { getStopWatchFactory } from "../../stopwatchy-browser/src/index";

export function getOperationFactory(
  logger: StructuredLogger
): OperationFactory {
  const stopWatchFactory: StopWatchFactory = getStopWatchFactory(logger);
  return new OperationFactoryImpl(stopWatchFactory, logger);
}
