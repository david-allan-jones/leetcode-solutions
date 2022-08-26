/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
    s = s.toLowerCase()
    let left = 0, right = s.length - 1
    while (left < right) {
        while (!chars.includes(s[left]) && left < right) {
            left++
        }
        while (!chars.includes(s[right]) && left < right) {
            right--
        }
        if (s[left++] !== s[right--]) return false
    }
    return true
};