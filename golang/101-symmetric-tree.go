package golang

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func search(left *TreeNode, right *TreeNode) bool {
    if left == nil && right == nil {
        return true
    }
    if right == nil || left == nil || left.Val != right.Val {
        return false
    }
    return search(left.Right, right.Left) && search(left.Left, right.Right)
}

/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isSymmetric(root *TreeNode) bool {
    if root == nil {
        return true
    }
    return search(root.Left, root.Right)
}