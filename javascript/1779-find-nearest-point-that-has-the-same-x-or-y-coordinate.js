/**
 * @param {number} x
 * @param {number} y
 * @param {number[][]} points
 * @return {number}
 */
 var nearestValidPoint = function(x, y, points) {
    let min = Number.MAX_SAFE_INTEGER
    let idx = -1
    for (let i = 0; i < points.length; i++) {
        if (x === points[i][0]) {
            const d = Math.abs(y - points[i][1])
            if (d < min) {
                min = d
                idx = i
            }
            continue
        }
        if (y === points[i][1]) {
            const d = Math.abs(x - points[i][0])
            if (d < min) {
                min = d
                idx = i
            }
        }
    }
    return idx
};