import { Queue } from '../Queue/queue.js';

export class Dequeue extends Queue {

    get last() {
        return this.queue.last.value;
    }

    unshift(value) {
        this.queue.insertFirst(value);
        return this;
    }

    pop() {
        if (!this.queue.isEmpty) {
            return this.queue.removeFirst();
        } else {
            throw new Error('Queue is empty');
        }
    }
}
