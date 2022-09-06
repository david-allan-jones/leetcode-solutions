/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    const frequencyMap = {}
    for (const n of nums) {
        if (!frequencyMap[n]) {
            frequencyMap[n] = 1
            continue
        }
        frequencyMap[n] = frequencyMap[n] + 1
    }
    
    const bucket = Array.from({ length: nums.length + 1 }, () => [])
    for (const c in frequencyMap){
        bucket[frequencyMap[c]].push(c)
    }
        
    const result = []
    for (let i = bucket.length - 1; i >= 0; i--) {
        if (bucket[i].length > 0) {
            bucket[i].forEach((elem)=> result.push(elem))
            if(k == result.length){
                return result
            }
        }
    }
};