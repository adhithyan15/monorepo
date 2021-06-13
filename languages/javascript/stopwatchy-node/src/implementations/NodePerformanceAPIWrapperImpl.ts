import { PerformanceAPIWrapper } from "../../../stopwatchy/src/interfaces/PerformanceAPIWrapper";

export class NodePerformanceAPIWrapperImpl implements PerformanceAPIWrapper {
  // eslint-disable-next-line
  private performance: any | undefined;
  constructor() {
    try {
      // eslint-disable-next-line
      this.performance = require("perf_hooks").performance;
    } catch (e) {
      this.performance = undefined;
    }
  }
  public isPerformanceDefined(): boolean {
    return this.performance !== undefined;
  }
  public isPerformanceNowDefined(): boolean {
    return "now" in this.performance;
  }
  public getPerformanceNow(): number {
    return this.performance.now();
  }
}
