function preorderTraversal(root: TreeNode | null): number[] {
    const traversal = []
    const stack = [root]
    while (stack.length) {
        const node = stack.pop()
        if (node) {
            traversal.push(node.val)
            stack.push(node.right)
            stack.push(node.left)
        }
    }
    return traversal
};