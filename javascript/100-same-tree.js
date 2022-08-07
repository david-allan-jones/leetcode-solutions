/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
 var isSameTree = function(p, q) {    
    let stack = [[p, q]]
    while (stack.length) {
        let [pNode, qNode] = stack.pop()
        if (pNode === null && qNode === null) continue
        if (pNode === null || qNode === null || pNode.val !== qNode.val) return false
        stack.push([pNode.right, qNode.right])
        stack.push([pNode.left, qNode.left])
    }
    return true
};