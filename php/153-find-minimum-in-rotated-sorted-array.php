class Solution {

    /**
    * @param Integer[] $nums
    * @return Integer
    */
    function findMin($nums) {
        $lo = 0;
        $hi = count($nums) - 1;
        while ($lo < $hi) {
            if ($nums[$lo] < $nums[$hi]) {
                break;
            }
            $mid = floor(($lo + $hi) / 2);
            if ($nums[$lo] <= $nums[$mid]) {
                $lo = $mid + 1;
            } else {
                $hi = $mid;
            }
        }
        return $nums[$lo];
    }
}