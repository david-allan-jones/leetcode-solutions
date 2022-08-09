package golang

func maxArea(height []int) int {
	calculateArea := func(left int, right int) int {
		x := right - left
		if height[left] > height[right] {
			return x * height[right]
		}
		return x * height[left]
	}

	left, right, max := 0, len(height)-1, 0
	for left < right {
		candidate := calculateArea(left, right)
		if candidate > max {
			max = candidate
		}
		if height[left] < height[right] {
			left++
		} else {
			right--
		}
	}
	return max
}
