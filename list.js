import { Node } from './node.js';

class LinkedList {
    linkedList = new Array();

    getList() {
        return this.linkedList;
    }

    get length() {
        return this.linkedList.length;
    }

    get first() {
        return this.linkedList[this.linkedList.length - 1]?.first;
    }

    get last() {
        return this.linkedList[this.linkedList.length - 1]?.last;
    }

    add(value) {
        const newNode = new Node(value);
        this.linkedList.push(newNode);

        newNode.first = this.linkedList[0];
        newNode.last  = this.linkedList[this.linkedList.length - 1];
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
console.log(list.first.value);
console.log(list.last.value);
