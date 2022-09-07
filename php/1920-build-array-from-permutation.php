class Solution {

    /**
    * @param Integer[] $nums
    * @return Integer[]
    */
    function buildArray($nums) {
        $n = count($nums);
        $ans = array_fill(0, $n, 0);
        for ($i = 0; $i < $n; $i++) {
            $ans[$i] = $nums[$nums[$i]];
        }
        return $ans;
    }
}