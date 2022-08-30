class Solution {

    /**
    * @param Integer[][] $intervals
    * @param Integer[] $newInterval
    * @return Integer[][]
    */
    function insert($intervals, $newInterval) {
        $result = [];
        for ($i = 0; $i < count($intervals); $i++) {
            if ($newInterval[0] > $intervals[$i][1]) {
                $result[] = $intervals[$i];
            } else if ($newInterval[1] < $intervals[$i][0]) {
                $result[] = $newInterval;
                return array_merge($result, array_slice($intervals, $i));
            } else {
                $newInterval = [
                    min($newInterval[0], $intervals[$i][0]),
                    max($newInterval[1], $intervals[$i][1])
                ];
            }
        }
        $result[] = $newInterval;
        return $result;
    }
}