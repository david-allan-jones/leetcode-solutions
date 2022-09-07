function findMin(nums: number[]): number {
    let lo = 0, hi = nums.length-1
    while (lo < hi) {
        if (nums[lo] < nums[hi]) break  
        const mid = Math.floor((lo + hi)/2)        
        if (nums[lo] <= nums[mid]) {
            lo = mid + 1
        } else {
            hi = mid
        }
    }
    return nums[lo]
};