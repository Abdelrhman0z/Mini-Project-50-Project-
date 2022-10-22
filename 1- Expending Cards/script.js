const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    document.querySelector('.active').classList.remove('active')
    panel.classList.add('active')
  })
})