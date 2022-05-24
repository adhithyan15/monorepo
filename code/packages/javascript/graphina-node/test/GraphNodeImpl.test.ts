import { GraphNode } from "../../graphina/src/interfaces/GraphNode";
import { GraphNodeImpl } from "../../graphina/src/implementations/GraphNodeImpl";

test("GraphNodeImpl::getStoredData should return the data stored", () => {
  const dataToStore = 5;
  const graphNode: GraphNode<number> = new GraphNodeImpl<number>(dataToStore);
  expect(graphNode.getStoredData()).toBe(dataToStore);
});
