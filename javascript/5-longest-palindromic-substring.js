/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    let startIndex = maxLength = 0

    const checkPalindromes = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            let len = right - left + 1
            if (len > maxLength) {
                startIndex = left
                maxLength = len
            }
            left--
            right++
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        checkPalindromes(i, i)
        checkPalindromes(i, i+1)  
    }
    
    return s.substr(startIndex, maxLength)
};
