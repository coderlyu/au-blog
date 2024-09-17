/**
 * from
 * https://leetcode.cn/problems/majority-element/?envType=study-plan-v2&envId=top-interview-150
 * 
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    const map = new Map();
    nums.forEach(num => {
        if(map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    });
    let max = 0, res = 0;
    for(const [key, value] of map) {
        if(value > max) {
            max = value;
            res = key;
        }
    }
    return res;
};

const nums = [3,2,3];
console.log(majorityElement(nums)); // 3