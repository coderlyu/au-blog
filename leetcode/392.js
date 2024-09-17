/**
 * from
 * https://leetcode.cn/problems/is-subsequence/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    let left = 0, right = 0;
    while(left < s.length && right < t.length) {
        if(s[left] === t[right]) {
            left++;
        }
        right++;
    }
    return left === s.length;
};

const s = "abc", t = "ahbgdc";
console.log(isSubsequence(s, t)); // true

console.log(isSubsequence("axc", "ahbgdc")); // false