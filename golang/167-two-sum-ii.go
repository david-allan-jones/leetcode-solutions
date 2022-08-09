package golang

func twoSum(numbers []int, target int) []int {
    lowerBound, upperBound := 0, len(numbers)-1
    result := make([]int, 2)
	for lowerBound < upperBound {
		sum := numbers[lowerBound] + numbers[upperBound]
		if sum == target {
            result[0] = lowerBound+1
            result[1] = upperBound+1
            break
		} else if sum < target {
			lowerBound++
		} else {
			upperBound--
		}
	}
	return result
}