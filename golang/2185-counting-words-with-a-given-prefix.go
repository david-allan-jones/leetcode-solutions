package golang

func prefixCount(words []string, pref string) int {
	cnt := 0
	for _, word := range words {
		if len(word) < len(pref) {
			continue
		}
		if word[0:len(pref)] == pref {
			cnt++
		}
	}
	return cnt
}
