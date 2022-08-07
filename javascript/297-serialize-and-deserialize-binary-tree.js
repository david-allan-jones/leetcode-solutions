/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
 var serialize = function(root) {
    let bufferStack = []
    let stack = [root]
    while (stack.length > 0) {
        let node = stack.pop()
        if (node) {
            bufferStack.push(node.val)
            stack.push(node.right)
            stack.push(node.left)
        } else {
            bufferStack.push('~')
        }
    }
    return bufferStack.join(',')
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {    
    let treeArray = data.split(',')
    let i = 0
    
    const createTree = () => {
        if (treeArray[i] === '~') {
            i++
            return null
        } else {
            let node = new TreeNode(treeArray[i])
            i++
            node.left = createTree()
            node.right = createTree()
            return node
        }
    }
    
    return createTree()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */