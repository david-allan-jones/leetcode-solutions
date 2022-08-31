class Solution {

    /**
    * @param Integer[][] $intervals
    * @return Integer[][]
    */
    function merge($intervals) {
        usort($intervals, function($i1, $i2) {
            return $i1[0] - $i2[0];
        });
        
        $result = [];
        $prev = $intervals[0];
        foreach ($intervals as $current) {
            if ($current[0] <= $prev[1]) {
                $prev[1] = max($prev[1], $current[1]);
            } else {
                $result[] = $prev;
                $prev = $current;
            }
        }
        $result[] = $prev;
        return $result;
    }
}