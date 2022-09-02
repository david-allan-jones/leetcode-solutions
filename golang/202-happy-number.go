package golang

func getSquaredSum(n int) int {
    squaredSum := 0
    for n > 0 {
        squaredSum += (n%10) * (n%10)
        n = n/10
    }
    return squaredSum
}

func isHappy(n int) bool {
    slow := n
    fast := getSquaredSum(n)
    for slow != fast {
        if fast == 1 {
            return true
        }
        slow = getSquaredSum(slow)
        fast = getSquaredSum(getSquaredSum(fast))
    }
    return fast == 1
}