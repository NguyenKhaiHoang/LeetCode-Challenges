// https://leetcode.com/problems/isomorphic-strings

const isIsomorphic = (s, t) => {
  if (s.length !== t.length) return false;
  let hashMap = new Map();
  for (let i=0;i<s.length;i++){
    console.log([s[i], t[i]]);
    if (!hashMap.get(s[i])){
      hashMap.set(s[i], t[i]);
      if (isValueDup(hashMap)) return false;
    } else {
      if (hashMap.get(s[i]) !== t[i]) return false;
    }
  }
  return true;
}

const isValueDup = map => {
  const varUsed = [];
  for (const [key, value] of map){
    if (!varUsed.includes(value)) varUsed.push(value);
    else return true;
  }
  return false;
}



// s = "egg", t = "add"
// s = "foo", t = "bar"
// s = "badc", t = "baba"
// s = 'paper', t='title'
console.log(isIsomorphic(s,t));

// Time O(n2) - Space O(1)
