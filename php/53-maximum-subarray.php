class Solution {

    /**
    * @param Integer[] $nums
    * @return Integer
    */
    function maxSubArray($nums) {
        $globalMax = $localMax = $nums[0];
        for($i = 1; $i < count($nums); $i++) {
            $localMax = max($nums[$i], $localMax + $nums[$i]);
            $globalMax = max($globalMax, $localMax);
        }
        return $globalMax;
    }
}