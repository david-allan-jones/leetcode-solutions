function fizzBuzz(n: number): string[] {
    const result: string[] = new Array(n)
    for (let i = 0; i < n; i++) {
        let num = i + 1
        const divisibleByThree = num % 3 === 0
        const divisibleByFive = num % 5 === 0
        if (divisibleByThree && divisibleByFive) {
            result[i] = 'FizzBuzz'
            continue
        }
        if (divisibleByThree) {
            result[i] = 'Fizz'
            continue
        }
        if (divisibleByFive) {
            result[i] = 'Buzz'
            continue
        }   
        result[i] = `${num}`
    }
    return result
};