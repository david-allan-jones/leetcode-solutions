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
 var maxPathSum = function(root) {
    let result = [root.val]
    const getMaxWithoutSplit = (node) => {
        if (!node) return 0    
        let leftMax = Math.max(getMaxWithoutSplit(node.left), 0)
        let rightMax = Math.max(getMaxWithoutSplit(node.right), 0)
        result[0] = Math.max(result[0], node.val + leftMax + rightMax)
        return node.val + Math.max(leftMax, rightMax)
    }
    getMaxWithoutSplit(root)
    return result[0]
};