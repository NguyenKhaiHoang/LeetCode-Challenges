// https://leetcode.com/problems/valid-anagram/
let isAnagram0 = (s, t) => {
  if (s.length !== t.length) return false;
  let newS = [...s].sort();
  let newT = [...t].sort();
  for (let i=0;i<newS.length;i++){
    if (newS[i] !== newT[i]) return false;
  }
  return true;
};


let isAnagram = (s, t) => {
  return [...s].sort().join("") === [...t].sort().join("");
};

// s = "anagram", t = "nagaram";
s = "rat", t = "car";

console.log(isAnagram(s,t));