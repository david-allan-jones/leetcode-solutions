package golang

func rotate(matrix [][]int)  {
    left, right := 0, len(matrix) - 1
    for left < right {
        for i := 0; i < right - left; i++ {
            tmp := matrix[left][left + i]
            matrix[left][left + i] = matrix[right - i][left]
            matrix[right - i][left] = matrix[right][right - i]
            matrix[right][right - i] = matrix[left + i][right]
            matrix[left + i][right] = tmp
        }
        left++
        right--
    }
}