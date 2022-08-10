function longestPalindrome(s: string): string {
    let maxLen = 0;
    let start = 0;
    const checkPalindromes = (left: number, right: number) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            let len = right - left + 1
            if (len > maxLen) {
                start = left
                maxLen = len
            }
            left--
            right++
        }
    }
    
    for (let i = 0; i < s.length; i++) {
        checkPalindromes(i, i)
        checkPalindromes(i, i+1)  
    }
    
    return s.substr(start, maxLen)
};
