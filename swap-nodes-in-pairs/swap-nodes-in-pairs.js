/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head || !head.next) {
        return head;
    }
    let oldHead = head;
    let newHead = head.next;
    let restOfTail = newHead.next;
    newHead.next = oldHead;
    oldHead.next = swapPairs(restOfTail);
    return newHead
};