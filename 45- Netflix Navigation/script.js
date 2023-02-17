const openBtn = document.getElementById('open')
const closeBtn = document.getElementById('close')
const navs = document.querySelectorAll('.nav')

openBtn.addEventListener('click', () => {
  navs.forEach(navEl => navEl.classList.add('visible'))
})

closeBtn.addEventListener('click', () => {
  navs.forEach(navEl => navEl.classList.remove('visible'))
})