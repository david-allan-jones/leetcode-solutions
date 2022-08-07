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
 * @param {number} k
 * @return {number}
 */
 var kthSmallest = function(root, k) {
    let stack = [], current = root, i = 0
    while (current || stack.length > 0) {        
        while (current) {
            stack.push(current)
            current = current.left
        }
        current = stack.pop()
        if (++i === k) return current.val
        current = current.right
    }
};