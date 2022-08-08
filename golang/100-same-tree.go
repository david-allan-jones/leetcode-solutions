package golang

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isSameTree(p *TreeNode, q *TreeNode) bool {
	stack := [][]*TreeNode{{p, q}}
	for len(stack) != 0 {
		i := len(stack) - 1
		nodes := stack[i]
		stack = stack[:i] //pop

		if nodes[0] == nil && nodes[1] == nil {
			continue
		}
		if nodes[0] == nil || nodes[1] == nil || nodes[0].Val != nodes[1].Val {
			return false
		}

		stack = append(stack, []*TreeNode{nodes[0].Right, nodes[1].Right})
		stack = append(stack, []*TreeNode{nodes[0].Left, nodes[1].Left})
	}
	return true
}
