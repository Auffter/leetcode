/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

// Example input data
let l1 = new ListNode(2, new ListNode(4, new ListNode(3)));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));

// Function to print the linked list
function printList(node: ListNode | null) {
    let output = [];
    while (node !== null) {
        output.push(node.val);
        node = node.next;
    }
    console.log(output);
}

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let value1:string = '';
    let value2:string = '';

    while (l1 !== null) {
        value1 = value1.concat(l1.val.toString());
        l1 = l1.next;
    }

    while (l2 !== null) {
        value2 = value2.concat(l2.val.toString());
        l2 = l2.next;
    }

    console.log(value1);
    console.log(value2);

    return null;
}

printList(l1) // Output: [2, 4, 3]
printList(l2); // Output: [5, 6, 4]
addTwoNumbers(l1, l2);