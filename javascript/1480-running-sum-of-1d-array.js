/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    if (nums.length <= 1) return nums
    let runningSums = new Array(nums.length)
    runningSums[0] = nums[0]
    for (let i = 1; i < nums.length; i++) {
        runningSums[i] = nums[i] + runningSums[i-1]
    }
    return runningSums
};