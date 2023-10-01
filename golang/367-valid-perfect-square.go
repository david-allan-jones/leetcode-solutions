package golang

func isPerfectSquare(num int) bool {
	lo, hi := 0, num
	for lo <= hi {
		mid := (lo + hi) / 2
		square := mid * mid
		if square == num {
			return true
		}

		if square < num {
			lo = mid + 1
		} else {
			hi = mid - 1
		}
	}
	return false
}
