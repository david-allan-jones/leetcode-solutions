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
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    if (root === null) return []
    
    let queue = [{ node: root, level: 0 }], output = []
    while (queue.length > 0) {
        const { node, level } = queue.shift()
        
        //add val to the level order result array or init if undefined
        if (output[level] !== undefined) {
            output[level].push(node.val)
        } else {
            output[level] = [node.val]
        }
        
        //enqueue left to right
        if (node.left !== null) queue.push({ node: node.left, level: level + 1 })
        if (node.right !== null) queue.push({ node: node.right, level: level + 1 })
    }
    return output
};