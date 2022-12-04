const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const namee = document.getElementById('name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bg_text = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 2500)

function getData() {
  header.innerHTML = '<img src="https://images.unsplash.com/photo-1539376248633-cf94fa8b7bd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"alt="Laptop image"/>'

  title.innerHTML = 'Lorem ipsum dolor sit amet'

  excerpt.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, quo'

  profile_img.innerHTML = ' <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="profile-img" />'

  namee.innerHTML = 'John Doe'
  date.innerHTML = 'Dec 04 , 2022'

  animated_bgs.forEach(bg => bg.classList.remove('animated-bg'))
  animated_bg_text.forEach(bg => bg.classList.remove('animated-bg-text'))
}