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
     * @param Integer[] $nums
     * @return TreeNode
     */
    function sortedArrayToBST($nums) {
        $len = count($nums);
        if ($len === 0) {
            return null;
        }
        
        $mid = floor(($len - 1) / 2);
        $node = new TreeNode(
            $nums[$mid],
            $this->sortedArrayToBST(array_slice($nums, 0, $mid)),
            $this->sortedArrayToBST(array_slice($nums, $mid + 1, $len))
        );
        return $node;
    }
}