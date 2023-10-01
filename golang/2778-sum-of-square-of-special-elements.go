package golang

func sumOfSquares(nums []int) int {
	sum := 0
	for i := 0; i < len(nums); i++ {
		if len(nums)%(i+1) == 0 {
			sum += nums[i] * nums[i]
		}
	}
	return sum
}
