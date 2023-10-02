package golang

func isPrefixString(s string, words []string) bool {
	buffer := ""
	for i := 0; i < len(words); i++ {
		buffer += words[i]
		if len(buffer) < len(s) {
			continue
		}
		return buffer == s
	}
	return false
}
