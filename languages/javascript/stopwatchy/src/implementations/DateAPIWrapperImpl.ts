import { DateAPIWrapper } from "../interfaces/DateAPIWrapper";
import { INVALID_DATE_VALUE } from "../constants";

export class DateAPIWrapperImpl implements DateAPIWrapper {
    public getTime(): number {
        if (!this.isDateAPISupported()) {
            return INVALID_DATE_VALUE;
        }
        const currentDate: Date = new Date();
        return currentDate.getTime();
    }
    public isDateAPISupported(): boolean {
        return Date != null;
    }
}