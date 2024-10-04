/**
 * from 
 * https://leetcode.cn/problems/linked-list-cycle/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let low, fast;
    low = head;
    fast = head.next;
    while(fast) {
        if(low === fast) {
            return true;
        }
        low = low.next;
        fast = fast.next && fast.next.next ? fast.next.next : null;
    }
    return false;
};