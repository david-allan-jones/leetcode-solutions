package golang

func isPerfectSquare(num int) bool {
	if num == 1 {
		return true
	}

	lo, hi := 0, num
	for lo <= hi {
		mid := (lo + hi) / 2
		noRemainder := num%mid == 0
		square := mid * mid
		if noRemainder && square == num {
			return true
		} else {
			if square < num {
				lo = mid + 1
			} else {
				hi = mid - 1
			}
		}
	}
	return false
}
