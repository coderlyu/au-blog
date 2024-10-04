/**
 * from
 * https://leetcode.cn/problems/insert-interval/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 
 * 
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals = [...intervals, newInterval];
    intervals.sort((a, b) => a[0] - b[0]);
    let result = [];
    for(let i = 0; i < intervals.length; i++) {
        const [a, b] = intervals[i];
        const len  = result.length;
        if(len && a <= result[len - 1][1]) {
            result[len - 1][1] = Math.max(b, result[len - 1][1]);
        } else {
            result.push([a, b]);
        }
    }
    return result;
};

const intervals = [[1,3],[6,9]], newInterval = [2,5];
console.log(insert(intervals, newInterval)); // [[1,5],[6,9]]
console.log(insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8])) // [[1,2],[3,10],[12,16]]