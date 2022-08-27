function search(traversal, root) {
    if (root.left) search(traversal, root.left)
    traversal.push(root.val)
    if (root.right) search(traversal, root.right)
}

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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    let traversal = []
    if (root === null) return traversal
    search(traversal, root)
    return traversal
};