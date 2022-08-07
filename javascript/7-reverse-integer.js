/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    let digits = [], resultPosition = 0, sign = (x < 0) ? -1 : 1
    x = sign * x
    while (x > 0) {
        digits[resultPosition++] = x % 10
        x = Math.floor(x / 10)
    }
    
    let result = 0, exp = 0
    for (let i = digits.length - 1; i >= 0; i--) {
        result += digits[i] * (10 ** exp++)
    }
    
    if (result > (2**31-1)) return 0
    if (result < (-1 * 2**31)) return 0 
    
    return sign * result
};