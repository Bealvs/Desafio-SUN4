function q1RemoverDuplicados(nums:Number[]) {
    if (nums.length === 0) {
        return [];
    }
    let index = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[index]) {
            index++;
            nums[index] = nums[i];
        }
    }
    nums.length = index + 1;
  return nums;
}

console.log(q1RemoverDuplicados([1, 2, 2, 3, 4, 4, 5]));
