import { StopWatchFactory } from "../../../stopwatchy/src/interfaces/StopWatchFactory";
import { StopWatch } from "../../../stopwatchy/src/interfaces/StopWatch";
import { TimeStampRetriever } from "../../../stopwatchy/src/interfaces/TimeStampRetriever";
import { TimeStampRetrieverImpl } from "../../../stopwatchy/src/implementations/TimeStampRetrieverImpl";
import { PerformanceAPIWrapper } from "../../../stopwatchy/src/interfaces/PerformanceAPIWrapper";
import { DateAPIWrapper } from "../../../stopwatchy/src/interfaces/DateAPIWrapper";
import { DateAPIWrapperImpl } from "../../../stopwatchy/src/implementations/DateAPIWrapperImpl";
import { BrowserPerformanceAPIWrapperImpl } from "./BrowserPerformanceAPIWrapperImpl";
import { StopWatchImpl } from "../../../stopwatchy/src/implementations/StopWatchImpl";
import { StopWatchLogger } from "../../../stopwatchy/src/interfaces/StopWatchLogger";
import { StopWatchLoggerFactory } from "../../../stopwatchy/src/interfaces/StopWatchLoggerFactory";
import { StopWatchLoggerFactoryImpl } from "../../../stopwatchy/src/implementations/StopWatchLoggerFactoryImpl";
import { StructuredLogger } from "../../../structured-logger/src/interfaces/StructuredLogger";

export class BrowserStopWatchFactoryImpl implements StopWatchFactory {
  constructor(private structuredLogger: StructuredLogger) {}
  public createStopWatch(): StopWatch {
    const performanceAPIWrapper: PerformanceAPIWrapper =
      new BrowserPerformanceAPIWrapperImpl();
    const dateAPIWrapper: DateAPIWrapper = new DateAPIWrapperImpl();
    const timeStampRetriever: TimeStampRetriever = new TimeStampRetrieverImpl(
      performanceAPIWrapper,
      dateAPIWrapper
    );
    const stopWatchLoggerFactory: StopWatchLoggerFactory =
      new StopWatchLoggerFactoryImpl();
    const logger: StopWatchLogger = stopWatchLoggerFactory.createLogger(
      this.structuredLogger
    );
    return new StopWatchImpl(timeStampRetriever, logger);
  }
}
