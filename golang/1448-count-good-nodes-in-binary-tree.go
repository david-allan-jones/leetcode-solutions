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

type MaxNode struct {
	Tree     *TreeNode
	MaxSoFar int
}

func goodNodes(root *TreeNode) int {
	if root == nil {
		return 0
	}

	count := 0
	stack := []MaxNode{{Tree: root, MaxSoFar: root.Val}}
	for len(stack) > 0 {
		current := stack[len(stack)-1]
		stack = stack[:len(stack)-1]

		maxSoFar := current.MaxSoFar
		if current.Tree.Val >= current.MaxSoFar {
			count++
			maxSoFar = current.Tree.Val
		}
		if current.Tree.Right != nil {
			stack = append(stack, MaxNode{Tree: current.Tree.Right, MaxSoFar: maxSoFar})
		}
		if current.Tree.Left != nil {
			stack = append(stack, MaxNode{Tree: current.Tree.Left, MaxSoFar: maxSoFar})
		}
	}
	return count
}
