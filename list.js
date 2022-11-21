import { Node } from "./node.js";

class LinkedList {
    first = null;
    last = null;

    get getList() {
        // let node = this.first;
        // let out = 'LinkedList => ';
        // while (node) {
        //     out += ` ${node.value} =>`;
        //     node = node.next;
        // }
        //
        // console.log(out);
    }

    // get length() {
    //
    // }

    // get first() {
    //
    // }

    // get last() {
    //
    // }

    add(value) {
        const newNode = new Node(value);

        if (!this.first) {
            this.first = newNode;
        }

        newNode.prev = this.last;

        if (this.last) {
            this.last.next = newNode;
        }

        this.last = newNode;
    }

    // next() {
    //
    // }

    // clear() {
    //
    // }
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);

console.log(list.getList);
// console.log(list.first.value);
// console.log(list.last.value);
