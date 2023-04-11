## Linked list

The list is implemented by the LinkedList class, the public API of the class:

```js
import { LinkedList } from './list.js';

const list = new LinkedList();
list.insertLast(1)
    .insertLast(2)
    .insertLast(3);
```

1. `structure` returns string of values from linked list elements:

```js
list.structure;
// LinkedList => 1 => 2 => 3 => NULL
```
2. `length` return linked list length:

```js
list.length;
// 3
```

3. `first` return first node of the list with a link on next node:

```js
list.first;
// Node1 {
//    next: Node2 {
//        next: Node3 { next: null, prev: Node2, value: 3 },
//        prev: Node1,
//        value: 2
//    },
//    prev: null,
//    value: 1
// }
```

4. `last` same as a `first` but return last node:

```js
list.last;
// Node3 {
//     next: null,
//     prev: Node2 {
//         next: Node3,
//         prev: Node1 { next: Node2, prev: null, value: 1 },
//         value: 2
//     },
//     value: 3
// }
```

5. `isEmpty` return true or false if list is empty or not.


6. `insertLast(value)` add node at the end of linked list and set link on a previous node.


7. `insertFirst(value)` add node at the beginning of linked list and set link on next node.

> If linked list is empty then the methods `insertLast(value)` and `insertFirst(value)` work the same.

8. `removeLast()` remove last node from linked list and remove link on it. If linked list is empty, method will throw an error.


9. `removeFirst()` remove first node from linked list and remove link on it. If linked list is empty, method will throw an error.


10. `findByValue(value)` find and return node with passed value. Throw an error if node with value not found:

```js
list.findByValue(2);
// Node2 {
//    next: Node3 { next: null, prev: Node2, value: 3 },
//    prev: Node1 { next: Node2, prev: null, value: 1 },
//    value: 2
// }
```

11. `removeOnceByValue(value)` find first node with passed value and remove it. Throw an error if node with value not found:
```js
list.insertLast(1)
    .insertLast(2)
    .insertLast(2);

list.removeOnceByValue(2);
list.structure;
// LinkedList => 1 => 2 => NULL
```
12. `removeAllByValue(value)` find and remove all nodes with passed value. Throw an error if node with value not found:
```js
list.insertLast(1)
    .insertLast(2)
    .insertLast(2);

list.removeAllByValue(2);
list.structure;
// LinkedList => 1 => NULL
```

13. `insertBefore(target, value)` find node with target value and inset new node with passed value before it. Refactor links on next and previous. Throw an error if node with value not found:
```js
list.insertBefore(2, 5);
list.structure;
// LinkedList => 1 => 5 => 2 => 3 => NULL
```

14. `insertAfter(target, value)` same as `insertBefore` but insert new node after target node. Refactor links on next and previous. Throw an error if node with value not found:
```js
list.insertAfter(2, 5);
list.structure;
// LinkedList => 1 => 2 => 5 => 3 => NULL
```

15. `replace(target, newValue)` find node with target value and replace its value. Throw an error if node with value not found:
```js
list.replace(2, 5);
list.structure;
// LinkedList => 1 => 5 => 3 => NULL
```

16. `reverse()` expands the linked list and refactor all links on next and previous. Throw an error if list is empty:
```js
list.reverse();
list.structure;
// LinkedList => 3 => 2 => 1 => NULL
```

17. `clear()` nullifies references to the first and last element and zeros length of the list.











