class Solution {

    function getSquaredSum($n) {
        $squaredSum = 0;
        while ($n > 0) {
            $squaredSum += pow($n%10, 2);
            $n = floor($n/10);
        }
        return $squaredSum;
    }

    /**
    * @param Integer $n
    * @return Boolean
    */
    function isHappy($n) {
        $fast = $this->getSquaredSum($n);
        while ($n !== $fast) {
            if ($fast === 1) {
                return true;
            }
            $n = $this->getSquaredSum($n);
            $fast = $this->getSquaredSum($this->getSquaredSum($fast));
        }
        return $fast === 1;
    }
}