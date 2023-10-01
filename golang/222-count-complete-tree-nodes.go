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
func countNodes(root *TreeNode) int {
	if root == nil {
		return 0
	}

	leftHeight := 1
	for p := root; p.Left != nil; p = p.Left {
		leftHeight++
	}
	rightHeight := 1
	for p := root; p.Right != nil; p = p.Right {
		rightHeight++
	}

	if leftHeight == rightHeight {
		return (1 << rightHeight) - 1
	}
	return countNodes(root.Left) + (countNodes(root.Right)) + 1

}
