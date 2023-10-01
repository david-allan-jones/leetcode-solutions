package golang

func busyStudent(startTime []int, endTime []int, queryTime int) int {
	sum := 0
	for i, _ := range startTime {
		if startTime[i] <= queryTime && queryTime <= endTime[i] {
			sum++
		}
	}
	return sum
}
