/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    if (!root) return true
    const search = (left, right) => {
        if (!left && !right) return true
        if (left && !right || !left && right || left.val !== right.val) return false
        return search(left.right, right.left) && search(left.left, right.right)
    }
    return search(root.left, root.right)
}