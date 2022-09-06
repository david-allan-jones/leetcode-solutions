package golang

import "math"

type ListNode struct {
	Val  int
	Next *ListNode
}

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
 func middleNode(head *ListNode) *ListNode {
    current, len := head, 0
    for current != nil {
        len++
        current = current.Next
    }
    
    current = head
    i, targetIdx := 1, int(math.Floor(float64(len/2))) + 1
    for i < targetIdx {
        i++
        current = current.Next
    }
    return current
}