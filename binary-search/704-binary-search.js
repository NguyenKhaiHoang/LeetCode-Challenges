// https://leetcode.com/problems/binary-search

const search = (nums, target) => {
  let left = 0, right = nums.length-1, mid = 0;
  while (left <= right){
    mid = Math.floor((left + right)/2);
    if (target > nums[mid]) left = mid + 1;
    else if (target < nums[mid]) right = mid - 1;
    else return mid;
  }
  return -1;
}