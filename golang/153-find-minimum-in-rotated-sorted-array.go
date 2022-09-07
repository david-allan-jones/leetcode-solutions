package golang

import "math"

func findMin(nums []int) int {
    lo, hi := 0, len(nums) - 1
    for lo < hi {
        if nums[lo] < nums[hi] {
            break
        }
        mid := int(math.Floor(float64((lo + hi) / 2)))
        if nums[lo] <= nums[mid] {
            lo = mid + 1
        } else {
            hi = mid
        }
    }
    return nums[lo]
}