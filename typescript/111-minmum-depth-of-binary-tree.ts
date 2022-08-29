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

type TreeNode = {
    val: number
    left: TreeNode | null
    right: TreeNode | null
}

function minDepth(root: TreeNode | null): number {
    if (!root) return 0
    const stack = [[root, 1]]
    let min = Number.MAX_SAFE_INTEGER 
    while (stack.length) {
        const [node, depth] = stack.pop() as [TreeNode, number]
        if (!node.left && !node.right && depth < min) {
            min = depth
        } else {
            if (node.right) stack.push([node.right, depth+1])
            if (node.left) stack.push([node.left, depth+1])
        }
    }
    return min
};