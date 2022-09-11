/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
 var wordBreak = function(s, wordDict) {
    let dp = (new Array(s.length + 1)).fill(false)
    dp[s.length] = true    
    for (let i = s.length - 1; i >= 0; i--) {
        for (const w of wordDict) {
            if (i + w.length <= s.length && w === s.substring(i, i + w.length)) {
                dp[i] = dp[i + w.length]
            }
            if (dp[i]) {
                break
            }
        }
    }
    return dp[0]
};