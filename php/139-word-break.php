class Solution {

    /**
    * @param String $s
    * @param String[] $wordDict
    * @return Boolean
    */
    function wordBreak($s, $wordDict) {
        $sLen = strlen($s);
        $dp = array_fill(0, $sLen + 1, false);
        $dp[$sLen] = true;
        for ($i = $sLen - 1; $i >= 0; $i--) {
            foreach ($wordDict as $w) {
                $wLen = strLen($w);
                if ($i + $wLen <= $sLen && $w === substr($s, $i, $wLen)) {
                    $dp[$i] = $dp[$i + $wLen];
                }
                if ($dp[$i]) {
                    break;
                }
            }
        }
        return $dp[0];
    }
}