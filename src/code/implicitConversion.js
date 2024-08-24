// 隐式转换
// value  =》 value.valueOf() => value.toString()
let a = {
  n: 1,
  valueOf: function () {
    console.log(this.n, '++++++++++++')
    if (this.n == 3) {
      return ++this.n
    } else {
      return this.n++
    }
  }
}

console.log(a == 1 && a == 2 && a == 4)
