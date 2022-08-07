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
 var isValidBST = function(root) {
    if (root === null) return true    
    let stack = [{ node: root, upperBound: Number.MAX_SAFE_INTEGER, lowerBound: Number.MIN_SAFE_INTEGER }]
    while (stack.length > 0) {
        const { node, upperBound, lowerBound } = stack.pop()
        if (lowerBound >= node.val || node.val >= upperBound) return false
        if (node.left !== null) stack.push({ node: node.left, upperBound: node.val, lowerBound })
        if (node.right !== null) stack.push({ node: node.right, upperBound, lowerBound: node.val })
    }
    return true
}