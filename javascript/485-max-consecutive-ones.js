/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
    let currentCount = max = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currentCount++
        } else {
            max = Math.max(max, currentCount)
            currentCount = 0
        }
    }
    return Math.max(max, currentCount)
};