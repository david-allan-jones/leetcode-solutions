package golang

func isValidSudoku(board [][]byte) bool {
	// check row
	for row := 0; row < 9; row++ {
		seen := make(map[byte]bool)
		for i := 0; i < 9; i++ {
			val := board[row][i]
			if val != '.' && seen[val] {
				return false
			}
			seen[val] = true
		}
	}

	// check column
	for col := 0; col < 9; col++ {
		seen := make(map[byte]bool)
		for i := 0; i < 9; i++ {
			val := board[i][col]
			if val != '.' && seen[val] {
				return false
			}
			seen[val] = true
		}
	}

	// check block
	for row := 0; row < 9; row = row + 3 {
		for col := 0; col < 9; col = col + 3 {
			seen := make(map[byte]bool)
			for i := 0; i < 3; i++ {
				for j := 0; j < 3; j++ {
					val := board[row+i][col+j]
					if val != '.' && seen[val] {
						return false
					}
					seen[val] = true
				}
			}
		}
	}

	return true
}
