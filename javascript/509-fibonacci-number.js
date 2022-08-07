/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
    if (n === 0) return 0
    let t1 = 0, t2 = 1
    for (let i = 2; i <= n; i++) {
        let temp = t2
        t2 = t2 + t1
        t1 = temp   
    }
    return t2
};