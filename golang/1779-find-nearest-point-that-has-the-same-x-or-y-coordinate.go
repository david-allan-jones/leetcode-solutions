package golang

import "math"

func nearestValidPoint(x int, y int, points [][]int) int {
    idx, min, n := -1, math.MaxInt64, len(points)
    for i := 0; i < n; i++ {
        if x == points[i][0] {
            d := int(math.Abs(float64(y - points[i][1])))
            if d < min {
                min = d
                idx = i
            }
            continue
        }
        if y == points[i][1] {
            d := int(math.Abs(float64(x - points[i][0])))
            if d < min {
                min = d
                idx = i
            }
        }
    }
    return idx
}