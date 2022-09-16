package golang

import "strconv"

func fizzBuzz(n int) []string {
    result := make([]string, n)
    for i := 0; i < n; i++ {
        num := i + 1
        divisibleByThree := num % 3 == 0
        divisibleByFive := num % 5 == 0
        if divisibleByThree && divisibleByFive {
            result[i] = "FizzBuzz"
            continue
        }
        if divisibleByThree {
            result[i] = "Fizz"
            continue
        }
        if divisibleByFive {
            result[i] = "Buzz"
            continue
        }
        result[i] = strconv.Itoa(num)
    }
    return result
}