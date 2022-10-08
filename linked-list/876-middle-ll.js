// https://leetcode.com/problems/middle-of-the-linked-list

const middleNode = head =>{
  let [totalNode, tail, counter] = [0, head, 0];
  
  // Count totalNode
  while (tail){
    totalNode++;
    tail = tail.next;
  }
  
  // Node traversing and return
  while (head){
    if (counter++ === Math.floor(totalNode/2)) return head;
    head = head.next;
  }
}
