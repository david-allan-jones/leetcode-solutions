/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
 var merge = function(intervals) {
    // sort by start
    intervals.sort((i1, i2) => i1[0] - i2[0])
        
    const result = []
    let prev = intervals[0]
    for (let i = 1; i < intervals.length; i++) {
        // if the interval overlaps with the previous one, use the max end to create a new interval
        if (intervals[i][0] <= prev[1]) {
            prev[1] = Math.max(prev[1], intervals[i][1])

        // otherwise, add the previous interval and reset it to the current one
        } else {
            result.push(prev)
            prev = intervals[i]
        }
    }
    // add the last interval
    result.push(prev)
    return result
};