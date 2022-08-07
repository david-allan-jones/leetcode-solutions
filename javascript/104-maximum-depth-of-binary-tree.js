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
 var maxDepth = function(root) {
    if (root === null) return 0
    let stack = [{node:root, depth:1}], maxDepth = 0
    while (stack.length > 0) {
        let v = stack.pop()
        if (v.depth > maxDepth) maxDepth = v.depth
        if (v.node.right !== null) stack.push({node: v.node.right, depth:v.depth+1})
        if (v.node.left !== null) stack.push({node: v.node.left, depth:v.depth+1})
    }
    return maxDepth
};