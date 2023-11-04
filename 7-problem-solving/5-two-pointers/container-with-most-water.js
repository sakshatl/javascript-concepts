function containerWithMostWaterNaive(heights = []) {
  let maxArea = 0;

  for (let i = 0; i < heights.length; i++) {
    for(let j = i + 1; j < heights.length; j++) {
      let currentMaxArea = (j - i) * Math.min(heights[i], heights[j]);
      maxArea = Math.max(currentMaxArea, maxArea);
    }
  }

  return maxArea;
}

function containerWithMostWaterOptimized(heights = []) {
  let maxArea = 0;

  let start = 0;
  let end = heights.length - 1;

  while(start < end) {
    let currentMaxArea = (end - start) * Math.min(heights[start], heights[end]);
    maxArea = Math.max(currentMaxArea, maxArea);

    if(heights[start] < heights[end]) {
      start = start + 1;
    } else {
      end = end - 1;
    }
  }

  return maxArea;
}

function main() {
  console.log(containerWithMostWaterNaive([1,8,6,2,5,4,8,3,7]));
  console.log(containerWithMostWaterNaive([2,3,4,5,18,17,6]));
  console.log("===");
  console.log(containerWithMostWaterOptimized([1,8,6,2,5,4,8,3,7]));
  console.log(containerWithMostWaterOptimized([2,3,4,5,18,17,6]));
}

main();

