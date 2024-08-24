const sum = (nums) => {
  const f = (i) => {
    return i >= nums.length ? 0 : nums[i] + f(i + 1)
  }
  return f(0)
}

console.log(sum([4, 5]))
