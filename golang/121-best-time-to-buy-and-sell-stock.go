package golang

func maxProfit(prices []int) int {
	left, right, maxP, n := 0, 1, 0, len(prices)
	for right < n {
		if prices[left] < prices[right] {
			profit := prices[right] - prices[left]
			if profit > maxP {
				maxP = profit
			}
		} else {
			left = right
		}
		right++
	}
	return maxP
}
