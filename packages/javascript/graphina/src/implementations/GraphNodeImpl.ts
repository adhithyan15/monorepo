import { GraphNode } from '../interfaces/GraphNode';

export class GraphNodeImpl<NodeDataType> implements GraphNode<NodeDataType> {
    constructor(private dataToStore: NodeDataType) {}

    public getStoredData(): NodeDataType {
        return this.dataToStore;
    }
}