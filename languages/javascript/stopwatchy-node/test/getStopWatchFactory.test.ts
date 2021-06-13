import { getStopWatchFactory } from "../src/node_entry_point";
import { NodeStopWatchFactoryImpl } from "../src/implementations/NodeStopWatchFactoryImpl";

test("should produce an instance of StopWatchFactoryImpl", () => {
  expect(getStopWatchFactory() instanceof NodeStopWatchFactoryImpl).toBe(true);
});
