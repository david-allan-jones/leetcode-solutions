package golang

func rotateString(s string, goal string) bool {
	buffer := s
	for i := 0; i < len(goal); i++ {
		if buffer == goal {
			return true
		}
		buffer = buffer[1:] + buffer[:1]
	}
	return false
}
