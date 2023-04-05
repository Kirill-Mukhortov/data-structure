import { Queue } from '../Queue/queue.js';

export class Dequeue extends Queue {

    get last() {
        if (!this.queue.isEmpty) {
            return this.queue.last.value;
        } else {
            throw new Error('Dequeue is empty');
        }
    }

    unshift(value) {
        this.queue.insertFirst(value);
        return this;
    }

    pop() {
        if (!this.queue.isEmpty) {
            return this.queue.removeFirst();
        } else {
            throw new Error('Dequeue is empty');
        }
    }
}
