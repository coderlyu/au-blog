const { ListNode, createTree } = require("./utils/Node");
/**
 * from
 * https://leetcode.cn/problems/reverse-linked-list-ii/?envType=study-plan-v2&envId=top-interview-150
 *
 *
 *
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */

var reverseBetween = function (head, left, right) {
  if (left === right) {
    return head;
  }
  const result = new ListNode();
  result.next = head;
  let pre = result;
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }
  let cur = pre.next;
  for (let i = 0; i < right - left; i++) {
    cur = cur.next;
  }
  let next = cur.next;
  let temp = cur;
  cur = pre.next;
  pre.next = temp;
  //   cur.next = next;
  for (let i = 0; i < right - left; i++) {
    let next2 = cur.next;
    cur.next = next;
    cur = cur.next;
  }
  return result.next;
};
