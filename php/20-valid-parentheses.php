class Solution {

    /**
    * @param String $s
    * @return Boolean
    */
    function isValid($s) {
        $stack = new SplStack();
        $m = ['(' => ')', '{' => '}', '[' => ']'];
        for ($i = 0; $i < strlen($s); $i++) {;
            if ($m[$s[$i]] !== null) {
                $stack->push($m[$s[$i]]);
            } else {
                if ($stack->isEmpty() || $stack->pop() !== $s[$i]) {
                    return false;
                }
            }
        }
        return $stack->isEmpty();
    }
}