class Solution {

    /**
    * @param Integer[] $nums
    * @return Integer
    */
    function maxProduct($nums) {
        $localMax = $nums[0];
        $localMin = $nums[0];
        $globalMax = $nums[0];
        for ($i = 1; $i < count($nums); $i++) {
            if ($nums[$i] < 0) {
                [$localMax, $localMin] = [$localMin, $localMax];
            }
            $localMax = max($nums[$i], $nums[$i] * $localMax);
            $localMin = min($nums[$i], $nums[$i] * $localMin);
            $globalMax = max($globalMax, $localMax);
        }
        return $globalMax;
    }
}