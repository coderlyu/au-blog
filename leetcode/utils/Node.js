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

module.exports = {
    ListNode,
    createTree
}