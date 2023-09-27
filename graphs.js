class Graph {
    constructor(value = null) {
        this.left = null;
        this.right = null;
        this.value = value;
    }

    setValue(value) {
        this.value = value;
    }

    setLeft(graph) {
        this.left = graph;
    }

    setRight(graph) {
        this.right = graph;
    }

    getLeft() {
        return this.left;
    }

    getRight() {
        return this.right;
    }

    getValue() {
        return this.value;
    }
}
