const maxProfit = (prices) => {
  let left = right = maxP = 0;
  for (let i=1;i<prices.length;i++){
    right = i;
    if (prices[right] - prices[left] > 0){
      if (prices[right] - prices[left] > maxP){
        maxP = prices[right] - prices[left];
        right++;
      } else {
        right++;
      }
    } else {
      left = i;
      right++;
    }
  }
  return maxP;
}

// Time: O(n)
// Space: O(1)






// let prices = [7,1,5,3,6,4];
// let prices = [7,6,4,3,1];
let prices = [1,2,4,2,5,7,2,4,9,0,9];
console.log(maxProfit(prices));





