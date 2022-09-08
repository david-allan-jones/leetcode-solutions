package golang

func finalValueAfterOperations(operations []string) int {
    x, n := 0, len(operations)
    for i := 0; i < n; i++ {
        if operations[i][1] == '+' {
            x++
        } else {
            x--
        }
    }
    return x
}