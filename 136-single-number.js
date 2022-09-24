const singleNumber = (nums)=>{
  let res = 0;
  for (let i=0; i<nums.length;i++){
    res = nums[i] ^ res;
  }
  return res;
}


nums = [2,2,1];
// nums = [4,1,2,1,2];
// nums = [1];
console.log(singleNumber(nums));