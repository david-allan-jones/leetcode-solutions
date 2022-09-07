class Solution {

    /**
    * @param Integer[] $nums
    * @return Integer[]
    */
    function getConcatenation($nums) {
        $n = count($nums);
        $ans = array_fill(0, $n*2, 0);
        for ($i = 0; $i < $n; $i++) {
            $ans[$i] = $nums[$i];
            $ans[$i + $n] = $nums[$i];
        }
        return $ans;
    }
}