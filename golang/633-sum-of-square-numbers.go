package golang

import "math"

func judgeSquareSum(c int) bool {
	lo, hi := 0, int(math.Sqrt(float64(c)))
	for lo <= hi {
		sum := lo*lo + hi*hi
		if sum == c {
			return true
		}

		if sum < c {
			lo++
		} else {
			hi--
		}
	}
	return false
}
