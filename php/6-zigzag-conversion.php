class Solution {

    /**
    * @param String $s
    * @param Integer $numRows
    * @return String
    */
    function convert($s, $numRows) {
        if ($numRows === 1) {
            return $s;
        }
        
        $rowsBuffer = array_fill(0, $numRows, '');
        $rowStep = 1;
        $rowIndex = 0;
        $len = strlen($s);
        for ($i = 0; $i < $len; $i++) {
            $rowsBuffer[$rowIndex] .= $s[$i];
            if ($rowIndex === 0) {
                $rowStep = 1;
            } else if ($rowIndex === $numRows - 1) {
                $rowStep = -1;
            }
            $rowIndex += $rowStep;
        }
        return implode('', $rowsBuffer);
    }
}