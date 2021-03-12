var findMaxConsecutiveOnes = function(nums) {
    //have variables max count and current count 
    //iterate through the array, if the element is equal to 1, increment the current count by 1, if it's not reset count back to zero.
    //if the current count is ever greater than the max count. then the max count becomes the current count
    
    let maxCount = 0;
    let currentCount = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            currentCount++;
            if (currentCount > maxCount) {
                maxCount = currentCount
            }
        } else {
          currentCount = 0
        }
        previousNumber = nums[i]
    }
    return maxCount
};

findMaxConsecutiveOnes([1,0,1,1,1,0,1])