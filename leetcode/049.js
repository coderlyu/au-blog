/**
 * from
 * https://leetcode.cn/problems/group-anagrams/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 
 * 
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let result = {};
    for(let str of strs) {
        const key = str.split('').sort().join('');
        if(result[key]) {
            result[key].push(str);
        } else {
            result[key] = [str];
        }
    }
    return Object.keys(result).map(key => result[key]);
};
const  strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs)); // [["bat"],["nat","tan"],["ate","eat","tea"]]