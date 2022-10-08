// https://leetcode.com/problems/linked-list-cycle-ii

var detectCycle = function(head) {
  // pointer jumps 1 node at a time.
  // catchPointer jumps 2 nodes at a time;
  let pointer = catchPointer = head;
  if (head){
      if (!head.next) return null;
  }
  if (!head) return null;
  
  do {
      pointer = pointer.next;
      catchPointer = catchPointer.next;
      if (catchPointer){
          catchPointer = catchPointer.next;
      }
  } while (pointer && catchPointer && pointer !== catchPointer)
  
  // pointer === catchPointer means we have a loop in this LL.
  if(pointer === catchPointer){
      
      // We jump 1 node at a time for head node and pointer node
      // When head node matches pointer node --> return the result
      while (head !== pointer){
          head = head.next;
          pointer = pointer.next;
      }
      return head;
  }
  return null;
};