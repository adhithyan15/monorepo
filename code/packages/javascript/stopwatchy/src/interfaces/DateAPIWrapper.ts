export interface DateAPIWrapper {
    isDateAPISupported(): boolean;
    getTime(): number;
}