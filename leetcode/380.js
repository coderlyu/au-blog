/**
 * from
 * https://leetcode.cn/problems/insert-delete-getrandom-o1/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 
 * 
 */
var RandomizedSet = function() {
    this.data = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.data.includes(val)) {
        return false;
    }
    this.data.push(val);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.data.includes(val)) {
        return false;
    }
    this.data = this.data.filter((item) => item !== val);
    return true;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const index = Math.floor(Math.random() * this.data.length);
    return this.data[index];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

// input: ["RandomizedSet", "insert", "remove", "insert", "getRandom", "remove", "insert", "getRandom"] ;;;;; [[], [1], [2], [2], [], [1], [2], []]
// output: [null, true, false, true, 2, true, false, 2]
const randomizedSet = new RandomizedSet();
randomizedSet.insert(1);
randomizedSet.remove(2);
randomizedSet.insert(2);
randomizedSet.getRandom();
randomizedSet.remove(1);
randomizedSet.insert(2);
randomizedSet.getRandom();
