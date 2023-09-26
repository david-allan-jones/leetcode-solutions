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

function goodNodes(root: TreeNode | null): number {
    if (root === null) return 0

    let count = 0
    const stack = [{ max: root.val, node: root }]
    while (stack.length) {
        let { max, node } = stack.pop()
        if (node.val >= max) {
            max = node.val
            count++
        }
        if (node.right) stack.push({ max, node: node.right })
        if (node.left) stack.push({ max, node: node.left })
    }
    return count
};