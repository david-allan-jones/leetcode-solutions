package golang

type ListNode struct {
	Val  int
	Next *ListNode
}

func getLength(node *ListNode) int {
    len := 0
    for node != nil {
        len++
        node = node.Next
    }
    return len
}

func shiftPointer(node *ListNode, k int) *ListNode {
    for k > 0 {
        node = node.Next
        k--
    }
    return node
}

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func getIntersectionNode(headA, headB *ListNode) *ListNode {
    lengthA, lengthB := getLength(headA), getLength(headB)
    pointerA, pointerB := headA, headB
    if lengthA > lengthB {
        pointerA = shiftPointer(pointerA, lengthA - lengthB)
    }
    if lengthA < lengthB {
        pointerB = shiftPointer(pointerB, lengthB - lengthA)
    }
    for {
        if pointerA == pointerB {
            break
        }
        pointerA = pointerA.Next
        pointerB = pointerB.Next
    }
    return pointerA
}