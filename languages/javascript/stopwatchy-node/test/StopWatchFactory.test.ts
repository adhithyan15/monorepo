import { StopWatchFactory } from "../../stopwatchy/src/interfaces/StopWatchFactory";
import { NodeStopWatchFactoryImpl } from "../src/implementations/NodeStopWatchFactoryImpl";
import { StopWatch } from "../../stopwatchy/src/interfaces/StopWatch";
import { StopWatchImpl } from "../../stopwatchy/src//implementations/StopWatchImpl";

test("should produce an instance of StopWatchImpl", () => {
  const stopWatchFactory: StopWatchFactory = new NodeStopWatchFactoryImpl();
  const stopWatch: StopWatch = stopWatchFactory.createStopWatch();
  expect(stopWatch instanceof StopWatchImpl).toBe(true);
});
