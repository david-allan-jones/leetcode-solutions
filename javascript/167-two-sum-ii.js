/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
    let lowerBound = 0, upperBound = numbers.length-1
    while (lowerBound < upperBound) {
        let sum = numbers[lowerBound] + numbers[upperBound]
        if (sum === target) return [lowerBound+1, upperBound+1]
        sum < target ? lowerBound++ : upperBound--
    }
};