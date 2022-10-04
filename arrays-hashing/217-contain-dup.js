// https://leetcode.com/problems/contains-duplicate/
const containsDuplicate = (nums) => {
  let list = [];
  for (let n of nums){
    if (list.includes(n)) return true;
    list.push(n);
  }
  return false;
}
// Time: O(n) - Space: O(n)

const containsDuplicate1 = (nums) => {
  nums.sort();
  for (let i=0;i<nums.length-1;i++){
    if (nums[i+1] === nums[i]) return true;
  }
  return false;
}
// Time: O(nlogn) - Space: O(1)

nums = [1,1,1,3,3,4,3,2,4,2]
nums = [1,2,3,4]
nums = [1,2,3,1]
console.log(containsDuplicate1(nums));