function bestTime(prices = []) {
  let i = 0
  let j = 0;

  let maxProfit = 0;

  while(i < prices.length) {
    // profitable?
    if(prices[j] < prices[i]) {
      let profit = prices[i] - prices[j];
      maxProfit = Math.max(maxProfit, profit);
    } else {
      j = i;
    }

    i = i + 1;
  }

  return maxProfit;
}

function main() {
  console.log(bestTime([7,1,5,3,6,4]));
}

main();