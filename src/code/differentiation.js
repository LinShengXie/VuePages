// 异或 转二进制对比数据差异 【1,2，3，4，5，6，7，6，5，4，3，2，1】
const differentiationFunc = (nums) => {
  //   let result = 0
  //   for (let index = 0; index < nums.length; index++) {
  //     result = result ^ nums[index]
  //   }
  console.log(4 ^ 9, '1^3 ')
  //   return result
  return nums.reduce((a, b) => a ^ b, 0)
}

console.log(differentiationFunc([1, 2, 3, 4, 5, 6, 9, 6, 5, 4, 3, 2, 1, 9, 11]))
