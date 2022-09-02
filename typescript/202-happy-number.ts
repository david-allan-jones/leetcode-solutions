function getSquaredSum(n: number): number {
    let squaredSum = 0
    while (n > 0) {
        squaredSum += (n%10)**2
        n = Math.floor(n/10)
    }
    return squaredSum
}

function isHappy(n: number): boolean {
    let slow = n
    let fast = getSquaredSum(n)
    while (slow !== fast) {
        if (slow === 1) return true
        slow = getSquaredSum(slow)
        fast = getSquaredSum(getSquaredSum(fast))
    }
    return slow === 1
};