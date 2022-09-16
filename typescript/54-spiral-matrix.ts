function spiralOrder(matrix: number[][]): number[] {
    let m = matrix.length, n = matrix[0].length
    const r = m * n, result: number[] = []
    let sr = 0, sc = 0, er = matrix.length - 1, ec = matrix[0].length - 1
    while (result.length < r) {
        //traverse right
        for (let i = sc; i <= ec; i++) {
            result.push(matrix[sr][i])
        }
        
        //traverse down
        for (let i = sr + 1; i <= er; i++) {
            result.push(matrix[i][ec])
        }
        
        //traverse left
        for (let i = ec - 1; i >= sc; i--) {
            if (sr === er) break
            result.push(matrix[er][i])
        }
        
        //traverse up
        for (let i = er - 1; i >= sr + 1; i--) {
            if (sc === ec) break
            result.push(matrix[i][sc])
        } 
        sr++
        sc++
        er--
        ec--
    }   
    return result
};