/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {
    let tail = 0, curr = 0
    while (curr < nums.length) {
        if (nums[curr] !== val) {
            nums[tail++] = nums[curr]
        }
        curr++
    }
    return tail
};