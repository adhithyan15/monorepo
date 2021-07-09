import { PerformanceAPIWrapper } from "../../../stopwatchy/src/interfaces/PerformanceAPIWrapper";
import { INVALID_PERFORMANCE_NOW_VALUE } from "../../../stopwatchy/src/constants";

export class MockPerformanceAPIWrapper implements PerformanceAPIWrapper {
  private performanceDefinedCheckShouldPass: boolean;
  private performanceNowDefinedCheckShouldPass: boolean;
  private performanceNowValueToReturnBack: number;
  constructor() {
    this.performanceDefinedCheckShouldPass = true;
    this.performanceNowDefinedCheckShouldPass = true;
    this.performanceNowValueToReturnBack = INVALID_PERFORMANCE_NOW_VALUE;
  }
  public isPerformanceDefined(): boolean {
    return this.performanceDefinedCheckShouldPass;
  }
  public isPerformanceNowDefined(): boolean {
    return this.performanceNowDefinedCheckShouldPass;
  }
  public getPerformanceNow(): number {
    return this.performanceNowValueToReturnBack;
  }
  public failPerformanceDefinedCheck(): void {
    this.performanceDefinedCheckShouldPass = false;
  }
  public failPerformanceNowDefinedCheck(): void {
    this.performanceNowDefinedCheckShouldPass = false;
  }
  public setPerformanceNowValueToReturnBack(valueToReturnBack: number): void {
    this.performanceNowValueToReturnBack = valueToReturnBack;
  }
}
