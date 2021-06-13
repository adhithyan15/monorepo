import { PerformanceAPIWrapper } from "../../../stopwatchy/src/interfaces/PerformanceAPIWrapper";

export class PerformanceAPIWrapperStub implements PerformanceAPIWrapper {
  public isPerformanceDefined(): boolean {
    return true;
  }
  public isPerformanceNowDefined(): boolean {
    return true;
  }
  public getPerformanceNow(): number {
    const dummyPerformanceNowValue = 0;
    return dummyPerformanceNowValue;
  }
}
