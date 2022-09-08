class Solution {

    /**
    * @param Integer $x
    * @param Integer $y
    * @param Integer[][] $points
    * @return Integer
    */
    function nearestValidPoint($x, $y, $points) {
        $min = 10001;
        $idx = -1;
        for ($i = 0; $i < count($points); $i++) {
            if ($x === $points[$i][0] || $y === $points[$i][1]) {
                $distance = abs($x - $points[$i][0]) + abs($y - $points[$i][1]);
                if ($distance < $min) {
                    $min = $distance;
                    $idx = $i;
                }
            }
        }
        return $idx;
    }
}