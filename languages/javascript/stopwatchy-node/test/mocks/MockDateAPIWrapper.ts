import { DateAPIWrapper } from "../../../stopwatchy/src/interfaces/DateAPIWrapper";
import { INVALID_TIME_STAMP } from "../../../stopwatchy/src/constants";

export class MockDateAPIWrapper implements DateAPIWrapper {
  private shouldFailDateAPISupportedCheck: boolean;
  private timeValueToReturnBack: number;
  constructor() {
    this.shouldFailDateAPISupportedCheck = false;
    this.timeValueToReturnBack = INVALID_TIME_STAMP;
  }
  public isDateAPISupported(): boolean {
    return !this.shouldFailDateAPISupportedCheck;
  }
  public getTime(): number {
    return this.timeValueToReturnBack;
  }
  public failDateAPISupportedCheck(): void {
    this.shouldFailDateAPISupportedCheck = true;
  }
  public setGetTimeValueToReturnBack(timeValue: number): void {
    this.timeValueToReturnBack = timeValue;
  }
}
