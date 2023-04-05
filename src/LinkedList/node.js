export class Node {
    constructor(value) {
        this.value = value;
    }

    next = null;
    prev = null;

    get next() {
        return this.next;
    }

    get prev() {
        return this.prev;
    }

    setNext(link) {
        this.next = link;
    }

    setPrev(link) {
        this.prev = link;
    }
}
