class Solution {

    /**
    * @param Integer[][] $matrix
    * @return NULL
    */
    function rotate(&$matrix) {
        $left = 0;
        $right = count($matrix) - 1;
        while ($left < $right) {
            for ($i = 0; $i < $right - $left; $i++) {
                $tmp = $matrix[$left][$left + $i];
                $matrix[$left][$left + $i] = $matrix[$right - $i][$left];
                $matrix[$right - $i][$left] = $matrix[$right][$right - $i];
                $matrix[$right][$right - $i] = $matrix[$left + $i][$right];
                $matrix[$left + $i][$right] = $tmp;
            }
            $left++;
            $right--;
        }
    }
}