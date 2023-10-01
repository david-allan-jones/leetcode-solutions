package golang

func mySqrt(x int) int {
	lo, hi := 0, x
	for lo <= hi {
		mid := (lo + hi) / 2
		square := mid * mid
		if square <= x {
			lo = mid + 1
		} else {
			hi = mid - 1
		}
	}
	return hi
}
