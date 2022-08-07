/**
 * @param {number[]} nums
 * @return {number}
 */
 var rob = function(nums) {
    let option1 = 0, option2 = nums[0]
    for (let i = 1; i < nums.length; i++) {
        let temp = Math.max(nums[i] + option1, option2)
        option1 = option2
        option2 = temp
    }
    return option2
};