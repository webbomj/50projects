const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 100
let loadCount = 0

let int = setInterval(blurring, 30)

function blurring() {
  load -= 1
  loadCount++

  if (loadCount > 99) {
    clearInterval(int)
  }

  loadText.innerText = `${loadCount}%`

  bg.style.filter = `blur(${load - 10}px)`
}