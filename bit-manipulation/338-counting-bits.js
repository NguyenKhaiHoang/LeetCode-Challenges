const countBits = n => {
  let result = [];
  let counter = 0;
  for (let i=0;i<=n; i++){
    for (let j = i; j>0; j = Math.floor(j/2)){
      let mod = j % 2;
      if (mod === 1) counter++;
      console.log(j, mod);
      console.log('===');
    }
    result.push(counter);
    counter = 0;
  }
  return result;
}

console.log(countBits(5));