/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function (nums) {
    let localMax = localMin = globalMax = nums[0];
    for (let i = 1; i < nums.length; i++) {
      const tmp = localMax;
      localMax = Math.max(nums[i], nums[i] * localMax, nums[i] * localMin);
      localMin = Math.min(nums[i], nums[i] * tmp, nums[i] * localMin);
      globalMax = Math.max(globalMax, localMax);
    }
    return globalMax;
};