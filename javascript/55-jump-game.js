/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
    let needed = 0
    for (let i = nums.length - 2; i >= 0; i--) {
        needed = needed + 1
        if (nums[i] >= needed) {
            needed = 0
        }
    }
    return needed === 0
};