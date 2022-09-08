function finalValueAfterOperations(operations: string[]): number {
    let x = 0
    for (let i = 0; i < operations.length; i++) {
        if (operations[i][1] === '+') {
            x++
        } else {
            x--
        }
    }
    return x
};