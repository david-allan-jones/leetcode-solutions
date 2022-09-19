function addDigits(num: number): number {
    while (Math.floor(num / 10) !== 0) {
        let sum = 0
        while (num > 0) {
            sum += num % 10
            num = Math.floor(num / 10)
        }
        num = sum
    }
    return num
};