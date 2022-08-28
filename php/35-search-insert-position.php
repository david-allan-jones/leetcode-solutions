class Solution {

/**
 * @param Integer[] $nums
 * @param Integer $target
 * @return Integer
 */
function searchInsert($nums, $target) {
    $left = 0;
    $right = count($nums) - 1;
    while ($left < $right) {
        $mid = intdiv($left + $right, 2);
        if ($nums[$mid] === $target) {
            return $mid;
        }
        
        if ($nums[$mid] > $target) {
            $right = $mid;
        } else {
            $left = $mid + 1;
        }
    }
    return ($target <= $nums[$left]) ? $left : $left + 1;
}
}