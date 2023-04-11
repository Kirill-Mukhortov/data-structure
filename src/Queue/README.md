## Queue

The queue is implemented by the Queue class, based on LinkedList.
Queue is built according to the principle First In First Out (FIFO).

Public API of the class:

1. `push(value)` adds new node to the end of the queue:

```js
import { Queue } from './queue.js';

const queue = new Queue();

queue.push(10)
     .push(11)
     .push(12);

queue.structure;
// LinkedList => 10 => 11 => 12 => NULL
```

2. `shift()` removes node from the front of the queue. Throws an error if the queue is empty:

```js
queue.shift();
// LinkedList => 11 => 12 => NULL
```

3. `first` returns value of the element from the front of the queue. Throws an error if the queue is empty.


4.  `structure` returns string of values from queue elements.


5. `length` return queue length.


6. `isEmpty` return true or false if queue is empty or not.
