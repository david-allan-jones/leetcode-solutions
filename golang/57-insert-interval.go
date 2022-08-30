package golang

import "math"

func insert(intervals [][]int, newInterval []int) [][]int {
	var result [][]int
	for i := 0; i < len(intervals); i++ {
		if newInterval[0] > intervals[i][1] {
			result = append(result, intervals[i])
			continue
		}
		if newInterval[1] < intervals[i][0] {
			result = append(result, newInterval)
			result = append(result, intervals[i:]...)
			return result
		}
		newInterval[0] = int(math.Min(float64(newInterval[0]), float64(intervals[i][0])))
		newInterval[1] = int(math.Max(float64(newInterval[1]), float64(intervals[i][1])))
	}
	result = append(result, newInterval)
	return result
}
