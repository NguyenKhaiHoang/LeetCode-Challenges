const isPalindrome = (s) => {
  if (!s.length) return true;
  s = s.toLowerCase();
  let [left, right] = [0, s.length-1];
  while(left < right) {
    while (left < right && isNonAlphaNumeric(s[left])) {left++;}
    while (left < right && isNonAlphaNumeric(s[right])) {right--;}
    if (s[left] !== s[right]) {
      return false;
    }
    else {

      left++;
      right--;
    }
  }
  return true;
}


const isNonAlphaNumeric = (char) => {
  return (char < 'a' || char > 'z') && (char < '0' || char > '9')
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome(" "));