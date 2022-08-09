class Solution {
    /**
     * @param Integer[] $nums
     * @param Integer $target
     * @return Integer[]
     */
    function twoSum($nums, $target) {
        $result = [];
        $hashMap = [];
        for ($i = 0; $ $i < count($nums); $i++) {
            $complement = $hashMap[$target - $nums[$i]];
            if ($complement !== null) {
                $result = [$i, $complement];
                break;
            }
            $hashMap[$nums[$i]] = $i;
        }
        return $result;
    }
}