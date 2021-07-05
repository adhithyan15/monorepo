import { MathAPIWrapper } from "../interfaces/MathAPIWrapper";

export class MathAPIWrapperImpl implements MathAPIWrapper {
    public isMathAPISupported(): boolean { return Math !== undefined; }
    public isMathRandomSupported(): boolean { return "random" in Math; }
    public random(): number { return Math.random(); }
}