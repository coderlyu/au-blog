/**
 * from
 * https://leetcode.cn/problems/ransom-note/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 
 * 
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    if(ransomNote.length === 0) return true
    const leftMap = new Map();
    for(let i = 0; i < ransomNote.length; i++) {
        const leftChar = ransomNote[i];
        leftMap.set(leftChar, leftMap.has(leftChar) ? leftMap.get(leftChar) + 1 : 1);
    }
    for(let i = 0; i < magazine.length; i++) {
        const rightChar = magazine[i];
        if(leftMap.has(rightChar)) {
            const count = leftMap.get(rightChar) - 1;
            if(count === 0) {
                leftMap.delete(rightChar);
            } else {
                leftMap.set(rightChar, count);
            }
        }
    }
    return leftMap.size === 0;
};

const ransomNote = "a", magazine = "b";
console.log(canConstruct(ransomNote, magazine)) // false
console.log(canConstruct("aa", "aab")) // true