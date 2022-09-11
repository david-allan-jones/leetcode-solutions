/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

 function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
    const map = new Map()
    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i)
    }
    
    const helper = (p1, p2, i1, i2) => {
        if (p1 > p2 || i1 > i2) {
            return null
        }
        
        const idx = map.get(preorder[p1])
        const nLeft = idx - i1
        
        return new TreeNode(
            inorder[idx],
            helper(p1 + 1, p1 + nLeft, i1, idx - 1),
            helper(p1 + nLeft + 1, p2, idx + 1, i2)
        )
    }
    
    return helper(0, preorder.length - 1, 0, inorder.length - 1)
};