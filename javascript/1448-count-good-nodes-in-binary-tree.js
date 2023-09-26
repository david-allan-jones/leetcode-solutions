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
 * @return {number}
 */
var goodNodes = function(root) {
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