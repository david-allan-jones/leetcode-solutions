/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
    let lo = 0, hi = nums.length-1
    while (lo <= hi) {
        let guess = (lo + hi) >> 1
        if (nums[guess] === target) return guess
        
        if (target < nums[guess]) {
            hi = guess-1
        } else {
            lo = guess+1
        }
    }
    return -1
};