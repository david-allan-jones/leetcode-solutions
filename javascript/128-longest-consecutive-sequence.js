/**
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    let set = new Set(nums), longest = 0    
    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i]-1)) {
            let length = 0
            while (set.has(nums[i] + length)) {
                length++
            }
            longest = Math.max(length, longest)
        }
    }
    return longest
};