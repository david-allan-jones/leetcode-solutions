/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let m = new Map();
    for (let i = 0; i < nums.length; i++) {        
        let c = m.get(nums[i]);
        if (c !== undefined) return [c, i];
        m.set(target - nums[i], i);
    }
};