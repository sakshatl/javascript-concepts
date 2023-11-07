function trappingRainWater(heights = []) {
  let maxLeftHeights = [];
  let maxRightHeights = [];

  let maxLeft = 0;
  let maxRight = 0
  for(let i = 0; i < heights.length; i++) {
    maxLeftHeights.push(maxLeft);
    if(heights[i] > maxLeft) {
      maxLeft = heights[i];
    }
  }

  for (let i = heights.length - 1; i >= 0; i--) {
    maxRightHeights.unshift(maxRight);
    if (heights[i] > maxRight) {
      maxRight = heights[i];
    }
  }

  console.log(maxLeftHeights);
  console.log(maxRightHeights);

  // For each position i we need Min(left, right)

  let totalTrappedWater = 0;

  for(let i = 0; i < heights.length; i++) {
    let trappedWater = Math.min(maxLeftHeights[i], maxRightHeights[i]) - heights[i];
    if(trappedWater > 0) {
      totalTrappedWater += trappedWater;
    }
  }

  console.log(totalTrappedWater);

}

function main() {
  trappingRainWater([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])
}

main();