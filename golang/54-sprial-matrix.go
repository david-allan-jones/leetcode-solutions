package golang

func spiralOrder(matrix [][]int) []int {
    m, n := len(matrix), len(matrix[0])
    r := m * n
    result := make([]int, r)
    sr, sc, er, ec := 0, 0, m - 1, n - 1
    current := 0
    for current < r {
        for i := sc; i <= ec; i++ {
            result[current] = matrix[sr][i]
            current++
        }
        
        for i := sr + 1; i <= er; i++ {
            result[current] = matrix[i][ec]
            current++
        }
        
        for i := ec - 1; i >= sc; i-- {
            if sr == er {
                break
            }
            result[current] = matrix[er][i]
            current++
        }
        
        for i := er - 1; i >= sr + 1; i-- {
            if sc == ec {
                break
            }
            result[current] = matrix[i][sc]
            current++
        }
        sr++
        sc++
        er--
        ec--
    }
    return result
}