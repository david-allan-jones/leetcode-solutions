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

 function postorderTraversal(root: TreeNode | null): number[] {
    const reverseOrder = []
    const stack = [root]
    while (stack.length) {
        const node = stack.pop()
        if (node) {
            reverseOrder.push(node.val)
            stack.push(node.left)
            stack.push(node.right)
        }
    }
    return reverseOrder.reverse()
};