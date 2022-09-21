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
 var postorderTraversal = function(root) {
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