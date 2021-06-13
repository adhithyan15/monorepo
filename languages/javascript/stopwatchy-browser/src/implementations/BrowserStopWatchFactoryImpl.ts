import { StopWatchFactory } from "../../../stopwatchy/src/interfaces/StopWatchFactory";
import { StopWatch } from "../../../stopwatchy/src/interfaces/StopWatch";
import { TimeStampRetriever } from "../../../stopwatchy/src/interfaces/TimeStampRetriever";
import { TimeStampRetrieverImpl } from "../../../stopwatchy/src/implementations/TimeStampRetrieverImpl";
import { PerformanceAPIWrapper } from "../../../stopwatchy/src/interfaces/PerformanceAPIWrapper";
import { BrowserPerformanceAPIWrapperImpl } from "./BrowserPerformanceAPIWrapperImpl";
import { StopWatchImpl } from "../../../stopwatchy/src/implementations/StopWatchImpl";

export class BrowserStopWatchFactoryImpl implements StopWatchFactory {
  public createStopWatch(): StopWatch {
    const performanceAPIWrapper: PerformanceAPIWrapper =
      new BrowserPerformanceAPIWrapperImpl();
    const timeStampRetriever: TimeStampRetriever = new TimeStampRetrieverImpl(
      performanceAPIWrapper
    );
    return new StopWatchImpl(timeStampRetriever);
  }
}
