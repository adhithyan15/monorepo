import { StopWatchFactory } from "../../stopwatchy/src/interfaces/StopWatchFactory";
import { BrowserStopWatchFactoryImpl } from "./implementations/BrowserStopWatchFactoryImpl";

export function getStopWatchFactory(): StopWatchFactory {
  return new BrowserStopWatchFactoryImpl();
}
