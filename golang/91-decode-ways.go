package golang

func numDecodings(s string) int {
	dp := make([]int, len(s)+1)
	dp[len(s)] = 1

	for i := len(s) - 1; i >= 0; i-- {
		// single digit interpretation
		if s[i] == '0' {
			dp[i] = 0
		} else {
			dp[i] = dp[i+1]
		}

		// 2 digit num not possible
		if i+1 >= len(s) {
			continue
		}

		// 2 digit interpretation
		isValidTwoDigitNum := s[i] == '1' || s[i] == '2' && (s[i+1] >= '0' && s[i+1] <= '6')
		if isValidTwoDigitNum {
			dp[i] = dp[i] + dp[i+2]
		}
	}
	return dp[0]
}
