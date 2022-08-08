package main

func isPalindrome(x int) bool {
	if x < 0 {
		return false
	}
	t, r, m := x, 0, 0
	for x > 0 {
		m = x % 10
		r = r*10 + m
		x = x / 10
	}
	return r == t
}
