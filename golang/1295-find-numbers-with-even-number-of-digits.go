package golang

func findNumbers(nums []int) int {
	count := 0
	for _, num := range nums {
		digits := 0
		for num > 0 {
			num = num / 10
			digits++
		}
		if digits%2 == 0 {
			count++
		}
	}
	return count
}
