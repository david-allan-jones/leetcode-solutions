function getLength(listNode: ListNode | null): number {
    let len = 0
    while (listNode !== null) {
        len++
        listNode = listNode.next
    }
    return len
}

function shiftPointer(listNode: ListNode | null, k: number): ListNode | null {
    let p = listNode
    while (k-- > 0) {
        p = p.next
    }
    return p
}


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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
    const [lengthA, lengthB] = [getLength(headA), getLength(headB)]
    let [pA, pB] = [headA, headB]
    if (lengthA > lengthB) {
        pA = shiftPointer(pA, Math.abs(lengthA - lengthB))
    }
    if (lengthA < lengthB) {
        pB = shiftPointer(pB, Math.abs(lengthA - lengthB))
    }
    while (true) {
        if (pA === pB) {
            return pA
        } else {
            pA = pA.next
            pB = pB.next
        }
    }
};