/**
 * from
 * https://leetcode.cn/problems/h-index/description/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    if(citations.length === 0) return 0;
    if(citations.length === 1) return citations[0];
    const len = citations.length;
    let max = 0;
    for(let i = 0; i < citations.length; i++) {
        if(citations[i] < len && citations[i] > max) {
            max = citations[i];
        }
    }
    return max
};

const citations = [3,0,6,1,5];
console.log(hIndex(citations)); // 3