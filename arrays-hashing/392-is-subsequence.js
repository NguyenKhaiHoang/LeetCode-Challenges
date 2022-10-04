// https://leetcode.com/problems/is-subsequence/

const isSubsequence = (s, t) => {
  if (s.length > t.length) return false;
  let subsequence = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[subsequence] === t[i]) {
      subsequence++;
    }
  }
  return subsequence === s.length
};

// (s = "abc"), (t = "ahbgdc");
// s = "axc", t = "ahbgdc";
s = "ab", t = "baab";
console.log(isSubsequence(s, t));
