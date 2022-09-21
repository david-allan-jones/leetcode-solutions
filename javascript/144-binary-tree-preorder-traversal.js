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
 var preorderTraversal = function(root) {
    const traversal = []
    const stack = [root]
    while (stack.length) {
        const node = stack.pop()
        if (node) {
            traversal.push(node.val)
            stack.push(node.right)
            stack.push(node.left)
        }
    }
    return traversal
};