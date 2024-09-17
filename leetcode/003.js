/**
 * from
 * https://leetcode.cn/problems/longest-substring-without-repeating-characters/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 
 * 
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length < 2) return s.length
    let left = 0, right = 1, maxLen = 0;
    const map = new Set();
    map.add(s[left]);
    while(right < s.length) {
        if(map.has(s[right])) {
            while(map.has(s[right])) {
                map.delete(s[left]);
                left++;
            }
        } else {
            map.add(s[right]);
            maxLen = Math.max(maxLen, right - left + 1);
            right++;
        }
    }
    return maxLen
};

console.log(lengthOfLongestSubstring("abcabcbb")) // 3
console.log(lengthOfLongestSubstring(" ")) // 1