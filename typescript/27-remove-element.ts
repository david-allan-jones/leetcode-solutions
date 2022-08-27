function removeElement(nums: number[], val: number): number {
    let tail = 0, curr = 0
    while (curr < nums.length) {
        if (nums[curr] !== val) {
            nums[tail++] = nums[curr]
        }
        curr++
    }
    return tail
};