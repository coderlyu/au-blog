const { ListNode, createTree } = require('./utils/Node');
/**
 * from
 * https://leetcode.cn/problems/merge-two-sorted-lists/?envType=study-plan-v2&envId=top-interview-150
 * 
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let head = null, l = list1, r = list2, cur = null;
    while(l && r) {
        if(l.val >= r.val) {
            if(head) {
                cur.next = new ListNode(r.val);
                cur = cur.next;
            } else {
               cur = head = new ListNode(r.val);
            }
            r = r.next;
        } else {
            if(head) {
                cur.next = new ListNode(l.val);
                cur = cur.next;
            } else {
               cur = head = new ListNode(l.val);
            }
            l = l.next;
        }
    }
    if(l) {
        if(head) {
            cur.next = l;
        } else {
            head = l;
        }
    }
    if(r) {
        if(head) {
            cur.next = r;
        } else {
            head = r;
        }
    }
    return head;
};

console.log(mergeTwoLists(createTree([1,2,4]), createTree([1,3,4])));