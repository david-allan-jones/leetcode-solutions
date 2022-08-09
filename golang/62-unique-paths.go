package golang

func uniquePaths(m int, n int) int {
	r, result := m+n-2, 1
	var min int
	if m < n {
		min = m - 1
	} else {
		min = n - 1
	}
	for k := 0; k < min; k++ {
		result = (result * (r - k)) / (k + 1)
	}
	return result
}