package golang

func twoSum(nums []int, target int) []int {
	m := make(map[int]int)
	n := len(nums)
	for i := 0; i < n; i++ {
		complement, exists := m[nums[i]]
		if exists {
			return []int{i, complement}
		}
		m[target-nums[i]] = i
	}
	return []int{-1, -1}
}