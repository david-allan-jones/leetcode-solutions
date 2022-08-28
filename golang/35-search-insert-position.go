package golang

import (
	"math"
)

func searchInsert(nums []int, target int) int {
	left := 0
	right := len(nums) - 1
	for left < right {
		mid := int(math.Floor(float64((left + right) / 2)))
		if nums[mid] == target {
			return mid
		}
		if nums[mid] > target {
			right = mid
		} else {
			left = mid + 1
		}
	}
	if target <= nums[left] {
		return left
	} else {
		return left + 1
	}
}
