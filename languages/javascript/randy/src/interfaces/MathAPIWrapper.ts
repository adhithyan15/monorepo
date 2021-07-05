export interface MathAPIWrapper {
    isMathAPISupported(): boolean;
    isMathRandomSupported(): boolean;
    random(): number;
}