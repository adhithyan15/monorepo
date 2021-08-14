export interface PerformanceAPIWrapper {
  isPerformanceDefined(): boolean;
  isPerformanceNowDefined(): boolean;
  getPerformanceNow(): number;
}
