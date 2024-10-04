/**
 * from
 * https://leetcode.cn/problems/merge-intervals/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const result = [];
    let left = 0, right = 0, max = intervals[0][1];
    while (right < intervals.length) {
        if (right + 1 < intervals.length && Math.max(max, intervals[right][1]) >= intervals[right + 1][0]) {
            right++;
            max = Math.max(max, intervals[right][1]);
        } else {
            result.push([intervals[left][0], Math.max(max, intervals[right][1])]);
            right++;
            left = right;
            max = right < intervals.length ? intervals[right][1] : 0;
        }
    }
    return result;
};

const intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(merge(intervals)) // [[1,6],[8,10],[15,18]]

console.log(merge([[1,4],[2,3]])) // [[1,4]]
console.log(merge([[2,3],[4,5],[6,7],[8,9],[1,10]])) // [[1,10]]
console.log(merge([[4,5],[2,4],[4,6],[3,4],[0,0],[1,1],[3,5],[2,2]])) // [[0,0],[1,1],[2,6]]

console.log('sort', [[4,5],[2,4],[4,6],[3,4],[0,0],[1,1],[3,5],[2,2]].sort((a, b) => a[0] - b[0])) // [[0,0],[1,1],[2,2],[2,4],[3,4],[3,5],[4,5],[4,6]]