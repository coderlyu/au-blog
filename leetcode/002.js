/**
 * from
 * https://leetcode.cn/problems/add-two-numbers/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let mod = 0;
    let l = l1, r = l2
    let result = null
    let cur = null;
    while (l || r) {
        const n1 = l ? l.val : 0;
        const n2 = r ? r.val : 0;
        let sum = mod + n1 + n2;
        mod = sum >= 10 ? 1 : 0;
        if (result) {
            cur.next = new ListNode(sum % 10);
            cur = cur.next
        }
        else {
            result = new ListNode(sum % 10);
            cur = result
        }
        l = l ? l.next : null;
        r = r ? r.next : null;
    }
    if (mod) {
        cur.next = new ListNode(mod);
    }
    return result
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

function createTree(arr) {
    let result = new ListNode();
    let cur = result;
    for (let i = 0; i < arr.length; i++) {
        cur.next = new ListNode(arr[i]);
        cur = cur.next;
    }
    return result.next;
}
console.log(addTwoNumbers(createTree([0]), createTree([2,7,8])))
