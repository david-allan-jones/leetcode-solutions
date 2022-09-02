class Solution {

    /**
    * @param Integer[] $nums
    * @return Integer
    */
    function singleNumber($nums) {
        $result = $nums[0];
        for ($i = 1; $i < count($nums); $i++) {
            $result = $result ^ $nums[$i];
        }
        return $result;
    }
}