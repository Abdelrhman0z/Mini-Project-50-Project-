const nav = document.querySelector('.nav')
const links = document.querySelectorAll('li a')

window.addEventListener('scroll', fixNav)

function fixNav() { (window.scrollY > nav.offsetHeight + 200) ? nav.classList.add('active') : nav.classList.remove('active') }

links.forEach(link => {
  link.addEventListener('click', () => {
    removeCurrent();
    link.classList.add('current')
  })
})

function removeCurrent() {
  links.forEach(link => link.classList.remove('current'));
}