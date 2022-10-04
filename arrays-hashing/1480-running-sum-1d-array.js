// https://leetcode.com/problems/running-sum-of-1d-array
const runningSum = nums => {
  for (let i=1; i<nums.length;i++){
    nums[i] += nums[i-1]
  }
  return nums;
}

// Time O(n) - Space O(1)