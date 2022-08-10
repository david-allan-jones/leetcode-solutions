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

func min(nums ...int) int {
	result := nums[0]
	for i := 0; i < len(nums); i++ {
		if nums[i] <= result {
			result = nums[i]
		}
	}
	return result
}

func maxProduct(nums []int) int {
	localMax := nums[0]
	localMin := nums[0]
	globalMax := nums[0]
	for i := 1; i < len(nums); i++ {
		if nums[i] < 0 {
			localMax, localMin = localMin, localMax
		}
		localMax = max(nums[i], nums[i]*localMax)
		localMin = min(nums[i], nums[i]*localMin)
		globalMax = max(globalMax, localMax)
	}
	return globalMax
}
