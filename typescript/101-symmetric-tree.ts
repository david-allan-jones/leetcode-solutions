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

 function isSymmetric(root: TreeNode | null): boolean {
    if (!root) return true
    const search = (left, right) => {
        if (!left && !right) return true
        if (left && !right || !left && right || left.val !== right.val) return false
        return search(left.right, right.left) && search(left.left, right.right)
    }
    return search(root.left, root.right)
};