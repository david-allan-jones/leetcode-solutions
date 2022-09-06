/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var middleNode = function(head) {
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