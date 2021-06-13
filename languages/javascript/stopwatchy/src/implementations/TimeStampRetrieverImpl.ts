import { TimeStampRetriever } from "../interfaces/TimeStampRetriever";
import { PerformanceAPIWrapper } from "../interfaces/PerformanceAPIWrapper";
import { INVALID_TIME_STAMP } from "../constants";

export class TimeStampRetrieverImpl implements TimeStampRetriever {
  private isPerformanceAPIAvailable: boolean;
  constructor(private performanceAPIWrapper: PerformanceAPIWrapper) {
    this.isPerformanceAPIAvailable =
      performanceAPIWrapper.isPerformanceDefined() &&
      performanceAPIWrapper.isPerformanceNowDefined();
  }
  public getCurrentTimeStamp(): number {
    return this.isPerformanceAPIAvailable
      ? this.performanceAPIWrapper.getPerformanceNow()
      : INVALID_TIME_STAMP;
  }
}
