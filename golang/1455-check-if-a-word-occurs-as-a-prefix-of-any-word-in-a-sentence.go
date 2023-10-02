package golang

import "strings"

func isPrefixOfWord(sentence string, searchWord string) int {
	for i, word := range strings.Fields(sentence) {
		if len(word) < len(searchWord) {
			continue
		}
		if word[0:len(searchWord)] == searchWord {
			return i + 1
		}
	}
	return -1
}
