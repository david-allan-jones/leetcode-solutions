/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
 var insert = function(intervals, newInterval) {    
    const result = []
    for (let i = 0; i < intervals.length; i++) {
        if (newInterval[0] > intervals[i][1]) {
            result.push(intervals[i])
        } else if (newInterval[1] < intervals[i][0]) {
            result.push(newInterval)
            return result.concat(intervals.slice(i))
        } else {
            newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])]
        }
    }
    result.push(newInterval)
    return result
};