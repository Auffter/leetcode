import { ListNode, addTwoNumbers } from './addtwonumbers';

function createLinkedList(arr: number[]): ListNode | null {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

function linkedListToArray(node: ListNode | null): number[] {
    let result: number[] = [];
    while (node !== null) {
        result.push(node.val);
        node = node.next;
    }
    return result;
}

describe('addTwoNumbers', () => {
    test('returns [7, 0, 8] for l1 = [2, 4, 3] and l2 = [5, 6, 4]', () => {
        let l1 = createLinkedList([2, 4, 3]);
        let l2 = createLinkedList([5, 6, 4]);
        let result = addTwoNumbers(l1, l2);
        expect(linkedListToArray(result)).toEqual([7, 0, 8]);
    });

    test('returns [0] for l1 = [0] and l2 = [0]', () => {
        let l1 = createLinkedList([0]);
        let l2 = createLinkedList([0]);
        let result = addTwoNumbers(l1, l2);
        expect(linkedListToArray(result)).toEqual([0]);
    });

    test('returns [8, 9, 9, 9, 0, 0, 0, 1] for l1 = [9, 9, 9, 9, 9, 9, 9] and l2 = [9, 9, 9, 9]', () => {
        let l1 = createLinkedList([9, 9, 9, 9, 9, 9, 9]);
        let l2 = createLinkedList([9, 9, 9, 9]);
        let result = addTwoNumbers(l1, l2);
        expect(linkedListToArray(result)).toEqual([8, 9, 9, 9, 0, 0, 0, 1]);
    });
});