 function twoSum(nums: number[], target: number): number[] {
    let map = new Map<number, number>();
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement) as number, i];
        }
        map.set(nums[i], i);
    }
    return [];
};