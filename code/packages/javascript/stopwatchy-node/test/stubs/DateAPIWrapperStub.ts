import { DateAPIWrapper } from "../../../stopwatchy/src/interfaces/DateAPIWrapper";
import { INVALID_TIME_STAMP } from "../../../stopwatchy/src/constants";

export class DateAPIWrapperStub implements DateAPIWrapper {
  public isDateAPISupported(): boolean {
    return true;
  }
  public getTime(): number {
    return INVALID_TIME_STAMP;
  }
}
