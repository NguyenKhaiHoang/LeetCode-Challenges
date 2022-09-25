// https://leetcode.com/problems/find-pivot-index
const pivotIndex = nums => {
  let leftSum = 0;
  let sum = nums.reduce((total, element) => total + element,0);
  for (let i = 0;i<nums.length;i++){
    if (leftSum === sum - leftSum - nums[i]) return i;
    leftSum += nums[i];
  }
  return -1;
}

console.log(pivotIndex([-1,-1,0,1,1,0]))
