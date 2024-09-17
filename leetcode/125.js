/**
 * from
 * https://leetcode.cn/problems/valid-palindrome/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    for(let i = 0; i < str.length / 2; i++) {
        if(str[i] !== str[str.length - i - 1])
             return false;
    }
    return true
};

const s = "A man, a plan, a canal: Panama"
console.log(isPalindrome(s)) // true;
