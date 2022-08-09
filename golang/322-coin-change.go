package golang

func coinChange(coins []int, amount int) int {
	dp := make([]int, amount+1)
	dp[0] = 0
	for i := 1; i < amount+1; i++ {
		dp[i] = -1
	}
    
    for i := 1; i <= amount; i++ {
        for _, coin := range coins {
			if i-coin >= 0 && dp[i-coin] != -1 {
				if dp[i] == -1 {
					dp[i] = dp[i-coin] + 1
				} else {
					dp[i] = min(dp[i], 1 + dp[i-coin])
				}
			}
		}

	}
	return dp[amount]
}

func min(a int, b int) int {
	if a < b {
		return a
	}
	return b
}