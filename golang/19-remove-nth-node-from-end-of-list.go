package golang

/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func removeNthFromEnd(head *ListNode, n int) *ListNode {
	left, right := &ListNode{0, head}, head
	for shifts := 0; shifts < n; shifts++ {
		right = right.Next
	}
	if right == nil {
		return head.Next
	}

	for right != nil {
		left = left.Next
		right = right.Next
	}

	left.Next = left.Next.Next
	return head
}
