class Solution {

    /**
    * @param String[] $operations
    * @return Integer
    */
    function finalValueAfterOperations($operations) {
        $x = 0;
        $n = count($operations);
        for ($i = 0; $i < $n; $i++) {
            if ($operations[$i][1] === '+') {
                $x++;
            } else {
                $x--;
            }
        }
        return $x;
    }
}