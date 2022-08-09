class Solution {

    /**
    * @param Integer[] $height
    * @return Integer
    */
    function maxArea($height) {
        $left = 0;
        $right = count($height)-1;
        $max = 0;
        while ($left < $right) {
            $candidate = $this->calculateArea($height, $left, $right);
            $max = max($max, $candidate);
            if ($height[$left] < $height[$right]) {
                $left++;
            } else {
                $right--;
            }
        }
        return $max;
    }

    function calculateArea($height, $left, $right) {
        return ($right - $left) * min($height[$left], $height[$right]);
    }
}