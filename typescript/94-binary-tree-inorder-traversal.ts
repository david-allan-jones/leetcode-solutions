function search(traversal: number[], root: TreeNode | null) {
    if (root.left) search(traversal, root.left)
    traversal.push(root.val)
    if (root.right) search(traversal, root.right)
}

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

function inorderTraversal(root: TreeNode | null): number[] {
    let traversal = []
    if (root === null) return traversal
    search(traversal, root)
    return traversal
};