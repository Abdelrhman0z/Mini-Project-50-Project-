const buttons = document.querySelectorAll('.faq-toggle')

buttons.forEach(b => {
  b.addEventListener('click', () => {
    b.parentElement.classList.toggle('active')
  })
})

