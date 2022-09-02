func convert(s string, numRows int) string {
    if numRows == 1 {
        return s
    }
    
    rowsBuffer := make([]string, numRows)
    rowStep, rowIndex := 1, 0
    for i := 0; i < len(s); i++ {
        rowsBuffer[rowIndex] += string(s[i])
        if (rowIndex == 0) {
            rowStep = 1
        } else if (rowIndex == numRows - 1) {
            rowStep = -1
        }
        rowIndex += rowStep
    }
    return strings.Join(rowsBuffer, "")
}