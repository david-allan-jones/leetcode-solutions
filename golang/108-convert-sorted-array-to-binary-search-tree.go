package golang

import "math"

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
 func sortedArrayToBST(nums []int) *TreeNode {
    if len(nums) == 0 {
        return nil
    }
    mid := int(math.Floor(float64((len(nums)-1) / 2)))
    return &TreeNode{
        nums[mid],
        sortedArrayToBST(nums[0:mid]),
        sortedArrayToBST(nums[mid+1:]),
    }
}