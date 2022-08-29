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
 var minDepth = function(root) {
    if (!root) return 0
    const stack = [[root, 1]]
    let min = Number.MAX_SAFE_INTEGER 
    while (stack.length) {
        const [node, depth] = stack.pop()
        if (!node.left && !node.right && depth < min) {
            min = depth
        } else {
            if (node.right) stack.push([node.right, depth+1])
            if (node.left) stack.push([node.left, depth+1])
        }
    }
    return min
};