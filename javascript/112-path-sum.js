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
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
    if (!root) return false
    const stack = [[root, 0]]
    while (stack.length) {
        let [node, sumSoFar] = stack.pop()
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