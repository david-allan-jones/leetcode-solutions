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

 function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
    if (!root) return false
    const stack = [[root, 0]]
    while (stack.length) {
        let [node, sumSoFar] = stack.pop() as [TreeNode, number]
        sumSoFar += node.val
        if (!node.left && !node.right && sumSoFar === targetSum) {
            return true
        } else {
            if (node.right) stack.push([node.right, sumSoFar])
            if (node.left) stack.push([node.left, sumSoFar])
        }
    }
    return false
};