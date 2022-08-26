function makeCalculateArea(height: number []) {
    return (x1: number, x2: number): number => {
        return (Math.max(x1, x2) - Math.min(x1, x2)) * Math.min(height[x1], height[x2])
    }
}

function maxArea(height: number[]): number {
    const calculateArea = makeCalculateArea(height)
    let left = 0, right = height.length - 1, max = 0
    while (left < right) {
        max = Math.max(max, calculateArea(left, right))
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    return max
};