import { StopWatchFactory } from "../../../stopwatchy/src/interfaces/StopWatchFactory";
import { StopWatch } from "../../../stopwatchy/src/interfaces/StopWatch";
import { TimeStampRetriever } from "../../../stopwatchy/src/interfaces/TimeStampRetriever";
import { TimeStampRetrieverImpl } from "../../../stopwatchy/src/implementations/TimeStampRetrieverImpl";
import { PerformanceAPIWrapper } from "../../../stopwatchy/src/interfaces/PerformanceAPIWrapper";
import { NodePerformanceAPIWrapperImpl } from "./NodePerformanceAPIWrapperImpl";
import { StopWatchImpl } from "../../../stopwatchy/src/implementations/StopWatchImpl";
import { StopWatchLogger } from "../../../stopwatchy/src/interfaces/StopWatchLogger";
import { StopWatchLoggerFactory } from "../../../stopwatchy/src/interfaces/StopWatchLoggerFactory";
import { StopWatchLoggerFactoryImpl } from "../../../stopwatchy/src/implementations/StopWatchLoggerFactoryImpl";

export class NodeStopWatchFactoryImpl implements StopWatchFactory {
  public createStopWatch(): StopWatch {
    const performanceAPIWrapper: PerformanceAPIWrapper =
      new NodePerformanceAPIWrapperImpl();
    const timeStampRetriever: TimeStampRetriever = new TimeStampRetrieverImpl(
      performanceAPIWrapper
    );
    const stopWatchLoggerFactory: StopWatchLoggerFactory =
      new StopWatchLoggerFactoryImpl();
    const logger: StopWatchLogger = stopWatchLoggerFactory.createLogger();
    return new StopWatchImpl(timeStampRetriever, logger);
  }
}
