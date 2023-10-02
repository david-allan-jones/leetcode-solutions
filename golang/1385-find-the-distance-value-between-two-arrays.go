package golang

import "sort"

func findTheDistanceValue(arr1 []int, arr2 []int, d int) int {
	sort.Ints(arr2)
	var cnt int
OUTER:
	for i := 0; i < len(arr1); i++ {
		left, right := 0, len(arr2)-1
		for left <= right {
			mid := (left + right) >> 1
			var dist int
			if arr1[i] > arr2[mid] {
				dist = arr1[i] - arr2[mid]
			} else {
				dist = arr2[mid] - arr1[i]
			}
			if dist <= d {
				continue OUTER
			}
			if arr1[i] > arr2[mid] {
				left = mid + 1
			} else {
				right = mid - 1
			}
		}
		cnt++
	}
	return cnt
}
