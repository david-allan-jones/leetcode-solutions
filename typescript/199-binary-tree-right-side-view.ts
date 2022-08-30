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

 function rightSideView(root: TreeNode | null): number[] {
    if (!root) return []

    const result = []
    const queue = [root]
    while (queue.length) {
        let nodesAtCurrentDepth = queue.length
        for (let i = 0; i < nodesAtCurrentDepth; i++) {
            let node = queue.shift()
            if (i === nodesAtCurrentDepth - 1) result.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }
    return result
};