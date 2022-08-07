/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    if (x < 0) return false;
    let t = x, r = 0, m = 0;
    while (t > 0) {
        m = t % 10;
        r = r * 10 + m;
        t = Math.floor(t/10);
    }
    return r === x;
};