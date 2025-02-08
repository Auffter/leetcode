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

// Could use some optimization :)

export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function createLinkedList(arr: number[]): ListNode | null {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

export function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let value1:string = "";
    let value2:string = "";

    while (l1 !== null) {
        value1 = value1.concat(l1.val.toString());
        l1 = l1.next;
    }

    while (l2 !== null) {
        value2 = value2.concat(l2.val.toString());
        l2 = l2.next;
    }

    let revValue1:string = value1.split('').reverse().join('');
    let revValue2:string = value2.split('').reverse().join('');

    let result:bigint = BigInt(revValue1) + BigInt(revValue2);
    let revResult:string = result.toString().split('').reverse().join('');
    let revResultArr:number[] = revResult.split('').map(Number);

    return createLinkedList(revResultArr);
}