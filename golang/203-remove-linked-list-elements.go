package golang

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
func removeElements(head *ListNode, val int) *ListNode {
	dummy := &ListNode{Val: 0, Next: head}
	current := dummy
	for current.Next != nil {
		if current.Next.Val == val {
			current.Next = current.Next.Next
			continue
		}
		current = current.Next
	}
	return dummy.Next
}
