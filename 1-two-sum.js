const twoSum = (nums, target) => {
  const hashMap = new Map();
  for (let i=0; i<nums.length;i++){
    let remain = target - nums[i];
    if (hashMap.has(remain)) return [i, hashMap.get(remain)];
    hashMap.set(nums[i], i);
  }
}

console.log(twoSum([2,7,11,15], 9));
// console.log(twoSum([3,2,4], 6));
// console.log(twoSum([3,3], 6));