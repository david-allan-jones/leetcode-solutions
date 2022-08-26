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

 function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    let left = new ListNode(0, head), right = head
    for (let shifts = 0; shifts < n; shifts++) {
        right = right.next
    }
    
    if (!right) return head.next
    
    while (right !== null) {
        left = left.next
        right = right.next
    }
    
    left.next = left.next.next
    return head
};