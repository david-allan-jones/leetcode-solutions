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
 var rightSideView = function(root) {
    if (!root) return []

    const result = []
    const queue = [root]
    while (queue.length) {
        let nodesAtCurrentDepth = queue.length
        for (let i = 0; i < nodesAtCurrentDepth; i++) {
            let node = queue.shift()
            if (i === nodesAtCurrentDepth - 1) result.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        }
    }
    return result
};