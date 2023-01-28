const images = document.querySelectorAll('.content')
const icons = document.querySelectorAll('li')

icons.forEach((item, idx) => {
  item.addEventListener('click', () => {
    removeAllImages()
    removeAllActives()

    item.classList.add('active')
    images[idx].classList.add('show')
  })
})


function removeAllImages() {
  images.forEach(image => image.classList.remove('show'))
}

function removeAllActives() {
  icons.forEach(icon => icon.classList.remove('active'))
}