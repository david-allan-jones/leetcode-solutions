/**
 * @param {number} n - a positive integer
 * @return {number}
 */
 var hammingWeight = function(n) {
    let weight = 0
    while (n > 0) {
        weight += n % 2
        n = Math.floor(n/2)
    }
    return weight
};