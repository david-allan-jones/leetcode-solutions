package golang

func countPrefixes(words []string, s string) int {
	cnt := 0
	for _, word := range words {
		if len(s) < len(word) {
			continue
		}
		if s[0:len(word)] == word {
			cnt++
		}
	}
	return cnt
}
