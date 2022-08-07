/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
 var removeNthFromEnd = function(head, n) {  
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