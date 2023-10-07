package golang

func reverse(x int) int {
	sign, result := 1, 0
	if x < 0 {
		sign = -1
	}
	x = sign * x
	for x > 0 {
		result = (result * 10) + (x % 10)
		x /= 10
	}
	if result > 2147483647 || result < -2147483648 {
		return 0
	}
	return sign * result
}
