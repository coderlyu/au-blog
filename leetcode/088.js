/**
 * from 
 * https://leetcode.cn/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
// 
var merge = function(nums1, m, nums2, n) {
    let left = 0, right = 0;
    let len = m + n;
    while (left < len && right < n) {
        if(nums1[left] > nums2[right]) {
            // 左边从left开始往后移位，超出的忽略
            for(let i = len - 1; i > left; i--) {
                nums1[i] = nums1[i - 1];
            }
            nums1[left] = nums2[right];
            left++;
            right++;
        } else {
            //
            left++;
        }
    }
    if(right < n) {
        left = len - (n - right);
        while(right < n) {
            nums1[left] = nums2[right];
            left++;
            right++;
        }
    }
    return nums1;
};

const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [4,5,6], n = 3;

// console.log(merge(nums1, m, nums2, n)); // [1,2,2,3,5,6]

// 逆向指针
var merge1 = function(nums1, m, nums2, n) {
    let left = m - 1, right = n - 1;
    let i = nums1.length - 1;
    while(i >= 0) {

    }
    return nums1;
};