const loveMe = document.querySelector('.loveMe')
const times = document.querySelector('#times')

let timeClicked = 0

loveMe.addEventListener('dblclick', createHeart)

function createHeart(e) {
  const heart = document.createElement('i')
  heart.classList.add('fas')
  heart.classList.add('fa-heart')

  const x = e.clientX
  const y = e.clientY

  const leftOffset = loveMe.offsetLeft
  const topOffset = loveMe.offsetTop

  const xInside = x - leftOffset
  const yInside = y - topOffset

  heart.style.top = `${yInside}px`
  heart.style.left = `${xInside}px`

  loveMe.appendChild(heart)

  times.textContent = ++timeClicked

  setTimeout(() => heart.remove(), 1000)
}