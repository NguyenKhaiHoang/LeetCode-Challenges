// https://leetcode.com/problems/longest-palindrome/
// result = sum of evens + (sum of odds - 1) + (if odd exists then continue to +1, this is the center of the palindrome)
const longestPalindrome = (s) => {
  let result = 0;
  let obj = {};
  let isOddExist = false;
  for (const c of s){
      obj[c] = (obj[c] || 0) + 1;
  }
  
  for (const c in obj){
      if (obj[c] % 2 === 0) result += obj[c];
      else {
          isOddExist = true;
          result += obj[c] - 1;
      }
  }
  return isOddExist ? result + 1: result;
};