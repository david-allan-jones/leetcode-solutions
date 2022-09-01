function getLength(listNode) {
    let len = 0
    while (listNode !== null) {
        len++
        listNode = listNode.next
    }
    return len
}

function shiftPointer(listNode, k) {
    let p = listNode
    while (k-- > 0) {
        p = p.next
    }
    return p
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {  
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