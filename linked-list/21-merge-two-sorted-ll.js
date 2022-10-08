const mergeTwoLists = (list1, list2) => {
  let result = tail = new ListNode();
  while (list1 && list2){
      if (list1.val < list2.val){
          tail.next = list1;
          list1 = list1.next;
      } else {
          tail.next = list2;
          list2 = list2.next;
      }
      tail = tail.next;
  }
  
  
  tail.next = list1 || list2;
  return result.next;
};