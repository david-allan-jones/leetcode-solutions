package golang

import "math"

func addDigits(num int) int {
    for int(math.Floor(float64(num / 10))) != 0 {
        sum := 0
        for num > 0 {
            sum += num % 10
            num = int(math.Floor(float64(num / 10)))
        }
        num = sum
    }
    return num
}