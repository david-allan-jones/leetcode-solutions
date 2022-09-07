class Solution {

    /**
    * @param String $n
    * @return Integer
    */
    function minPartitions($n) {
        $result = 0;
        for ($i = 0; $i < strlen($n); $i++) {
            $result = max($result, $n[$i]);
        }
        return $result;
    }
}