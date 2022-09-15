package golang

func setZeroes(matrix [][]int)  {
    n, m := len(matrix), len(matrix[0])
    zeroRows := make([]bool, n)
    zeroCols := make([]bool, m)
    
    for x := 0; x < n; x++ {
        for y := 0; y < m; y++ {
            if matrix[x][y] == 0 {
                zeroRows[x] = true
                zeroCols[y] = true
            }
        }
    }
    
    for i := 0; i < n; i++ {
        if zeroRows[i] {
            for j := 0; j < m; j++ {
                matrix[i][j] = 0
            }
        }
    }
    
    for i := 0; i < m; i++ {
        if zeroCols[i] {
            for j:= 0; j < n; j++ {
                matrix[j][i] = 0
            }
        }
    }
}