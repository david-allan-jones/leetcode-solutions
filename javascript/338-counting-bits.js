var hammingWeight = function(n) {
    let s = n.toString(2), w = 0 //to base 2
    for (c of s) {
        if (c === '1') w+=1;
    }
    return w
}

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let a = []
    for (let i = 0; i <= n; i++) {
        a[i] = hammingWeight(i)
    }
    return a
};

