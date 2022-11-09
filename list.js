import { Node } from './node.js';

class LinkedList {

    linkedList = new Array();
    firstNode = null;
    lastNode = null;

    getList() {
        return this.linkedList;
    }

    get length() {
        return this.linkedList.length;
    }

    get first() {
        return this.firstNode?.value;
    }

    get last() {
        return this.lastNode?.value;
    }

    add(value) {
        const newNode = new Node(value);
        this.linkedList.push(newNode);
    }

    next() {

    }

    clear() {

    }

    includes() {

    }
}

const list = new LinkedList;
list.add(1);
list.add(2);
list.add(3);

console.log(list.getList());
// console.log(list.first.value);
// console.log(list.last.value);
