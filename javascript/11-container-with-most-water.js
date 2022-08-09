/**
 * Complexity:
 * Time: O(n)
 * Space: O(1)
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    const calculateArea = (i1, i2) => {
        return (Math.max(i1, i2) - Math.min(i1, i2)) * Math.min(height[i1], height[i2])
    }
    
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