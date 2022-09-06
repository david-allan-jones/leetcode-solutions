/**
 * Definition for a singly-linked list.
 * class ListNode {
 *     public $val = 0;
 *     public $next = null;
 *     function __construct($val = 0, $next = null) {
 *         $this->val = $val;
 *         $this->next = $next;
 *     }
 * }
 */
class Solution {

    /**
     * @param ListNode $head
     * @return ListNode
     */
    function middleNode($head) {
        $current = $head;
        $len = 0;
        while ($current) {
            $len = $len + 1;
            $current = $current->next;
        }
        
        $current = $head;
        $i = 1;
        $targetIdx = floor($len / 2) + 1;
        while ($i < $targetIdx) {
            $i = $i + 1;
            $current = $current->next;
        }
        
        return $current;
    }
}