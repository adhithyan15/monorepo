import { CryptoAPIWrapper } from "../../../randy/src/interfaces/CryptoAPIWrapper";
import { TypedArray } from "../../../randy/src/definitions/TypedArray";

export class BrowserCryptoAPIWrapper implements CryptoAPIWrapper {
  public isCryptoAPIAvailable(): boolean {
    return "crypto" in window;
  }
  public isGetRandomValuesAvailable(): boolean {
    return this.isCryptoAPIAvailable() && "getRandomValues" in window.crypto;
  }
  public getRandomValues(inputArray: TypedArray): TypedArray {
    return window.crypto.getRandomValues(inputArray);
  }
}
