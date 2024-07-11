// 获取随机字符或中文
const getRandomStr = () => {
  //   return String.fromCharCode(Math.floor(Math.random() * 128));
  const chinese = String.fromCharCode(Math.floor(Math.random() * 20902) + 19968)
  const english = String.fromCharCode(Math.floor(Math.random() * 128))
  return Math.random() > 0.5 ? chinese : english
}

// 随什么16进制颜色
const getRandomColor = () => {
  return `#${Math.random().toString(16).slice(2, 8)}`
}

let timer: any = undefined
let status = true


const run = async (ref: any) => {
  const canvas = ref
  const ctx = canvas?.getContext('2d')
  const innerWidth = window.innerWidth-8
  const innerHeight = window.innerHeight-8
  const fontSize = 16
  const colums = Math.floor(innerWidth / fontSize)
  // 分辨率
  const dpi = window.devicePixelRatio || 1
  if (!ctx || canvas === null) {
    return
  }
  canvas.width = innerWidth * dpi
  canvas.height = innerHeight * dpi
  ctx.font = `${fontSize * dpi}px Arial`
  // 字体颜色
  canvas.onclick = () => {
    status = !status
    if (status) {
      timer = setInterval(draw, 20)
    } else {
      clearInterval(timer)
    }
  }

  let index = 0
  clearInterval(timer)
  const indexList = Array.from({ length: colums }, () => 0)
  const draw = () => {
    //对齐方式
    ctx.textBaseline = 'top'
    index++
    ctx.fillStyle = 'rgba(0,0,0,.1)'
    ctx.fillRect(0, 0, innerWidth, index * fontSize * dpi)
    for (let i = 0; i < colums; i++) {
      const x = i * fontSize

      if (indexList[i] * fontSize > innerHeight || (Math.random() > 0.85 && Math.random() > 0.85)) {
        indexList[i] = 0
      }
      const y = indexList[i] * fontSize
      ctx.fillStyle = 'rgba(255,255,255,1)'
      ctx.fillStyle = getRandomColor()
      ctx.fillText(getRandomStr(), x, y)
      indexList[i]++
    }
  }
  draw()
  timer = setInterval(draw, 20)
}

export default run
