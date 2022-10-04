let hammingWeight = (n) => {
  let counter = 0;
  while (n != 0){
    n = n & (n-1);
    counter++;
  }
  return counter;
}

// let n = 00000000000000000000000000001011;
// let n = 00000000000000000000000010000000;
let n = 11111111111111111111111111111101;
console.log(hammingWeight(n));