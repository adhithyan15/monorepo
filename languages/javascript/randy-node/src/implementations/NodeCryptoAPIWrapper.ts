import { CryptoAPIWrapper } from "../../../randy/src/interfaces/CryptoAPIWrapper";
import { TypedArray } from "../../../randy/src/definitions/TypedArray";
import { StructuredLogger } from "../../../structured-logger/src/interfaces/StructuredLogger";

export class NodeCryptoAPIWrapper implements CryptoAPIWrapper {
  private cryptoAPI: any;
  constructor(private logger: StructuredLogger) {
    this.loadCryptoAPI();
  }
  public isCryptoAPIAvailable(): boolean {
    return this.cryptoAPI !== undefined;
  }
  public isGetRandomValuesAvailable(): boolean {
    return this.cryptoAPI !== undefined && "randomFillSync" in this.cryptoAPI;
  }
  public getRandomValues(inputArray: TypedArray): TypedArray {
    if (!this.isGetRandomValuesAvailable()) {
      this.logger.logError(
        "Node environment doesn't support generation of cryptographically secure random numbers"
      );
      return inputArray;
    }
    return this.cryptoAPI.randomFillSync(inputArray);
  }
  private loadCryptoAPI(): void {
    let crypto;
    try {
      this.cryptoAPI = require("crypto");
    } catch (err) {
      this.cryptoAPI = undefined;
    }
  }
}
