import { LinkedList } from '../LinkedList/list.js';

export class DynamicArray {
    #data;
    #length = 0;
    #maxElements;
    #currentNodeLength = 0;

    constructor(length) {
        if (!length || !Number.isInteger(length) || length < 0) {
          this.#maxElements = 3;
        } else {
            this.#maxElements = length;
        }

        this.#data = new LinkedList();
        this.#data.insertLast(new Array(this.#maxElements));
    }

    get struct() {
        return this.#data.first.next;
    }

    get length() {
        return this.#length;
    }

    getIndex(index) {
        return this.#data[this.#currentNodeLength];
    }

    add(value) {
        this.#length += 1;
        if(this.#currentNodeLength !== this.#maxElements)  {
            this.#data.last.value[this.#currentNodeLength] = value;
            this.#currentNodeLength += 1;
        } else {
            this.#data.insertLast(new Array(this.#maxElements));
            this.#currentNodeLength = 0;
            this.#data.last.value[this.#currentNodeLength] = value;
            this.#currentNodeLength += 1;
        }
    }

    get() {

    }
}


const arr = new DynamicArray(4);

// console.log(arr.struct);

arr.add(1);
arr.add(2);
arr.add(3);
arr.add(4);
arr.add(5);
arr.add(6);
arr.add(7);
arr.add(8);
arr.add(9);
arr.add(10);



console.log(arr.struct);
console.log(arr.length);
// console.log(arr.currentNodeValueLength);
// console.log(arr.length);


//  Новый лист
// arr.add(4);
// arr.add(5);
//
// console.log(arr.length);  // 5
//
// console.log(arr.get(0));  // 1
// console.log(arr.get(1));  // 2
// console.log(arr.get(4));  // 5
