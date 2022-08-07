package golang

func longestPalindrome(s string) string {
    startIndex, maxLength, n := 0, 0, len(s)

    checkPalindromes := func(left int, right int) {
        for left>=0 && right<n && s[left]==s[right] {
            currentLength := right-left+1
            if currentLength>maxLength {
                startIndex = left
                maxLength = currentLength
            }
            left--
            right++
        }
    }
    
    for i := 0; i < n; i++ {
        checkPalindromes(i, i)
        checkPalindromes(i, i+1)
    }
    
    return s[startIndex:startIndex+maxLength]
}