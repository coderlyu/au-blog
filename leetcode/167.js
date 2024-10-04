/**
 * from
 * https://leetcode.cn/problems/two-sum-ii-input-array-is-sorted/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 
 * 
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const result = [];
    let left = 0, right = numbers.length - 1;
    while(left < right) {
        const sum = numbers[left] + numbers[right];
        if(sum === target) {
            result.push(left + 1, right + 1);
            return result;
        } else if(sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return result;
};

const numbers = [2,7,11,15], target = 9;
console.log(twoSum(numbers, target)) // [1,2]