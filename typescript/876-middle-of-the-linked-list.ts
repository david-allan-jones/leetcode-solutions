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

 function middleNode(head: ListNode | null): ListNode | null {
    let current = head, len = 0
    while (current) {
        len++
        current = current.next
    }
    
    current = head
    let i = 1
    const targetIdx = Math.floor(len/2) + 1
    while (i++ < targetIdx) {
        current = current.next
    }
    return current
};