var splitList = (head) => {
    let slow = head, fast = head.next
    while (fast !== null && fast.next !== null) {
        slow = slow.next
        fast = fast.next.next
    }
    let second = slow.next
    slow.next = null
    return [head, second]
}

var reverseList = (head) => {
    let current = head, prev = null
    while (current !== null) {
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
}

var mergeLists = (list1, list2) => {
    while (list2 !== null) {
        let tmp1 = list1.next, tmp2 = list2.next
        list1.next = list2
        list2.next = tmp1
        list1 = tmp1
        list2 = tmp2
    }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {    
    let [firstHalf, secondHalf] = splitList(head)
    mergeLists(firstHalf, reverseList(secondHalf))
};