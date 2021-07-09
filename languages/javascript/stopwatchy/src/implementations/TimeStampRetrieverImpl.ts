import { TimeStampRetriever } from "../interfaces/TimeStampRetriever";
import { PerformanceAPIWrapper } from "../interfaces/PerformanceAPIWrapper";
import { DateAPIWrapper } from "../interfaces/DateAPIWrapper";
import { INVALID_TIME_STAMP } from "../constants";

export class TimeStampRetrieverImpl implements TimeStampRetriever {
  private isPerformanceAPIAvailable: boolean;
  private isDateAPIAvailable: boolean;
  constructor(private performanceAPIWrapper: PerformanceAPIWrapper, private dateAPIWrapper: DateAPIWrapper) {
    this.isPerformanceAPIAvailable =
      this.performanceAPIWrapper.isPerformanceDefined() &&
      this.performanceAPIWrapper.isPerformanceNowDefined();
    this.isDateAPIAvailable = this.dateAPIWrapper.isDateAPISupported();
  }
  public getCurrentTimeStamp(): number {
    return this.isPerformanceAPIAvailable
      ? this.performanceAPIWrapper.getPerformanceNow()
      : this.isDateAPIAvailable ? this.dateAPIWrapper.getTime() : INVALID_TIME_STAMP;
  }
}
