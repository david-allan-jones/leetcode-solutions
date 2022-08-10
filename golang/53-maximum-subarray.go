package golang

func max(nums ...int) int {
	result := nums[0]
	for i := 0; i < len(nums); i++ {
		if nums[i] >= result {
			result = nums[i]
		}
	}
	return result
}

func maxSubArray(nums []int) int {
	localMax, globalMax := nums[0], nums[0]
	for i := 1; i < len(nums); i++ {
		localMax = max(nums[i], localMax+nums[i])
		globalMax = max(globalMax, localMax)
	}
	return globalMax
}
