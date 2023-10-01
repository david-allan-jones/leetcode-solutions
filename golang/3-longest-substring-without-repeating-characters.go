package golang

func lengthOfLongestSubstring(s string) int {
	maxLength := 0
	charMap := make(map[rune]int)
	startIndex := 0

	for i, char := range s {
		if charIndex, ok := charMap[char]; ok && charIndex >= startIndex {
			startIndex = charIndex + 1
		} else {
			maxLength = max(maxLength, i-startIndex+1)
		}
		charMap[char] = i
	}

	return maxLength
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}
