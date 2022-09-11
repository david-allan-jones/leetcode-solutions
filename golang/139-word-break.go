package golang

func wordBreak(s string, wordDict []string) bool {
    dp := make([]bool, len(s) + 1)
    dp[len(dp) - 1] = true
    for i := len(s) - 1; i >= 0; i-- {
        for j := 0; j < len(wordDict); j++ {
            if i + len(wordDict[j]) <= len(s) && wordDict[j] == s[i:i + len(wordDict[j])] {
                dp[i] = dp[i + len(wordDict[j])]
            }
            if dp[i] {
                break
            }
        }
    }
    return dp[0]
}