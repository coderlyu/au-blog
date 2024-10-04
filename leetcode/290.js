/**
 * from
 * https://leetcode.cn/problems/word-pattern/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const len = pattern.length;
    const words = s.split(" ");
    if(len !== words.length) return false;
    const patternMap = new Map(), strMap = new Map();
    for(let i = 0; i < len; i++) {
        const x = pattern[i], y = words[i];
        if(patternMap.has(x) && patternMap.get(x) !== y) return false;
        if(strMap.has(y) && strMap.get(y) !== x) return false;
        patternMap.set(x, y);
        strMap.set(y, x);
    }
    return true
};

const pattern = "abba", s = "dog cat cat dog";
console.log(wordPattern(pattern, s)) // true
console.log(wordPattern("abba", "dog constructor constructor dog")) // true //! 注意这个测试用例,constructor是一个关键字,所以这个测试用例是不合法的