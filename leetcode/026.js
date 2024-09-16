/**
 * from
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-array/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length <= 1) return nums.length;
    let left = 0, right = 1
    while(right < nums.length) {
        while(right < nums.length && nums[right] === nums[left]) {
            right++;
        }
        if(right >= nums.length) break;
       nums[++left] = nums[right++];
    }
    return left + 1
};

const nums = [1,1,2];
console.log(removeDuplicates(nums)); // 2

var removeDuplicates2 = function(nums) {
    if(nums.length <= 1) return nums.length;
    const map = new Map();
    map.set(nums[0], 1);
    let left = 1;
    for(let i = 1; i < nums.length; i++) {
        if(map.has(nums[i])) {
            continue;
        } else {
            nums[left++] = nums[i];
            map.set(nums[i], 1);
        }
    }
    return left
};
console.log(removeDuplicates2([1,1,2])); // 2