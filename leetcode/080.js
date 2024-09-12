
/**
 * from
 * https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length <= 2) return nums.length;
    let left = 1, right = 1, count = 1;
    while(right < nums.length) {
        if(nums[right] === nums[right - 1]) {
            count++;
            if(count <= 2) {
                nums[left++] = nums[right];
            }
        } else {
            count = 1;
            nums[left++] = nums[right];
        }
        right++;
    }
    return left
};

const nums = [1,1,1,2,2,3];
console.log(removeDuplicates(nums)); // 5


var removeDuplicates2 = function(nums) {
    const n = nums.length;
    if (n <= 2) {
        return n;
    }
    let slow = 2, fast = 2;
    while (fast < n) {
        if (nums[slow - 2] != nums[fast]) {
            nums[slow] = nums[fast];
            ++slow;
        }
        ++fast;
    }
    return slow;
};