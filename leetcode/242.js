/**
 * from
 * https://leetcode.cn/problems/valid-anagram/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length) return false;
    const map = new Map();
    for(let i = 0; i < s.length; i++) {
        const char = s[i];
        if(map.has(char)) {
            map.set(char, map.get(char) + 1);
        } else {
            map.set(char, 1);
        }
    }
    
    for(let i = 0; i < t.length; i++) {
        const char = t[i];
        if(map.has(char)) {
            const count = map.get(char) - 1
            map.set(char, count);
            if(count <= 0) {
                map.delete(char);
            }
        } else {
            return false;
        }
    }
    return map.size === 0
};
const s = "anagram", t = "nagaram";
console.log(isAnagram(s, t)); // true