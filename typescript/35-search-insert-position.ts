function searchInsert(nums: number[], target: number): number {
    let left = 0
    let right = nums.length - 1
    while (left < right) {
        let mid = Math.floor((left+right)/2)
        if (nums[mid] === target) return mid
        if (nums[mid] > target) {
            right = mid
        } else {
            left = mid + 1
        }
    }
    return target <= nums[left] ? left : left + 1
}