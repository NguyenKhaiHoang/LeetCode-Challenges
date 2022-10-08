// https://leetcode.com/problems/reverse-linked-list/

const reverseList = head => {
  let [prev, curr, temp] = [null, head, null];
  while (curr) {
    temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  return prev;
}