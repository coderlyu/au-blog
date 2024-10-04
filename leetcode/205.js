/**
 * from
 * https://leetcode.cn/problems/isomorphic-strings/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false
    const maps = {}
    const mapt = {}
    for(let i = 0; i < s.length; i++) {
        const x = s[i], y = t[i]
        if(maps[x] && maps[x] !== y) return false
        if(mapt[y] && mapt[y] !== x) return false
        maps[x] = y
        mapt[y] = x
    }
    return true
};

const s = "egg", t = "add"
console.log(isIsomorphic(s, t)) // true
console.log(isIsomorphic("foo", "bar")) // false
console.log(isIsomorphic("badc", "baba")) // false