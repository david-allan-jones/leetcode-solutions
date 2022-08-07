/**
 * @param {number[]} nums
 * @param {number} target
 * Time O(log(N)) | Space O(1)
 * @return {number}
 */
 var search = (nums, target) => {
    let [left, right] = [0, nums.length - 1]
    
    while (left <= right) {
        const mid = (left + right) >> 1
        const guess = nums[mid]
        const [leftNum, rightNum]  = [nums[left], nums[right]]

        if (guess === target) return mid

        //left sorted region
        if (leftNum <= guess) {
            if (leftNum <= target && target < guess) {
                right = mid-1
            } else {
                left = mid+1
            }
            
        //right sorted region
        } else {
            if (guess < target && target <= rightNum) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }

    return -1
};