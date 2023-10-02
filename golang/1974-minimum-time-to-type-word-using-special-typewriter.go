package golang

func minTimeToType(word string) int {
	pointer, seconds := 'a', 0
	for _, ch := range word {
		seconds += minDist(int(ch), int(pointer)) + 1
		pointer = ch
	}
	return seconds
}

func minDist(n, m int) int {
	d1 := (n - m + 26) % 26
	d2 := (m - n + 26) % 26
	if d1 < d2 {
		return d1
	}
	return d2
}
