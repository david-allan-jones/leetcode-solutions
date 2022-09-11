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
 func buildTree(preorder []int, inorder []int) *TreeNode {
    indexMap := make(map[int]int)
    for i := 0; i < len(inorder); i++ {
        indexMap[inorder[i]] = i
    }
    
    var Helper func(p1 int, p2 int, i1 int, i2 int) *TreeNode
    Helper = func(p1 int, p2 int, i1 int, i2 int) *TreeNode {
        if p1 > p2 || i1 > i2 {
            return nil
        }
        
        idx := indexMap[preorder[p1]]
        nLeft := idx - i1
        
        return &TreeNode{
            Val: inorder[idx],
            Left: Helper(p1 + 1, p1 + nLeft, i1, idx - 1),
            Right: Helper(p1 + nLeft + 1, p2, idx + 1, i2),
        }
    }
    
    return Helper(0, len(preorder) - 1, 0, len(inorder) - 1)
}