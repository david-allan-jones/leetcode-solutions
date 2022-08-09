package golang

func climbStairs(n int) int {
	fib := func(index int) int {
		fib1, fib2 := 0, 1
		for i := index; i >= 0; i-- {
			tmp := fib2
			fib2 = fib2 + fib1
			fib1 = tmp
		}
		return fib2
	}
	return fib(n - 1)
}