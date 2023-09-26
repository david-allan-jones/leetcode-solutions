/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     public $val = null;
 *     public $left = null;
 *     public $right = null;
 *     function __construct($val = 0, $left = null, $right = null) {
 *         $this->val = $val;
 *         $this->left = $left;
 *         $this->right = $right;
 *     }
 * }
 */
class Solution {

    /**
     * @param TreeNode $root
     * @return Integer
     */
    function goodNodes($root) {
        if ($root === null) return 0;

        $count = 0;
        $stack = [[$root->val, $root]];
        while (count($stack) > 0) {
            $current = array_pop($stack);
            $max = $current[0];
            $node = $current[1];
            if ($node->val >= $max) {
                $max = $node->val;
                $count = $count + 1;
            }
            if ($node->right !== null) array_push($stack, [$max, $node->right]);
            if ($node->left !== null) array_push($stack, [$max, $node->left]); 
        }
        return $count;
    }
}