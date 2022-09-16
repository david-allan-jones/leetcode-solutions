package golang

func spiralOrder(matrix [][]int) []int {
    m, n := len(matrix), len(matrix[0])
    r := m * n
    result := make([]int, r)
    sr, sc, er, ec := 0, 0, m - 1, n - 1
    idx := 0
    for idx < r {
        for i := sc; i <= ec; i++ {
            result[idx] = matrix[sr][i]
            idx++
        }
        
        for i := sr + 1; i <= er; i++ {
            result[idx] = matrix[i][ec]
            idx++
        }
        
        for i := ec - 1; i >= sc; i-- {
            if sr == er {
                break
            }
            result[idx] = matrix[er][i]
            idx++
        }
        
        for i := er - 1; i >= sr + 1; i-- {
            if sc == ec {
                break
            }
            result[idx] = matrix[i][sc]
            idx++
        }
        sr++
        sc++
        er--
        ec--
    }
    return result
}