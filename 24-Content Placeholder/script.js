const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profileImg = document.getElementById('profile_img')
const namee = document.getElementById('name')
const email = document.getElementById('email')

const animatedBgs = document.querySelectorAll('.animated-bg')
const animatedBgText = document.querySelectorAll('.animated-bg-text')

setTimeout(getData, 1000)


function getData() {
  fetchData()
  header.innerHTML = '<img src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"/>'

  profileImg.innerHTML = ' <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="profile-img" />'

  animatedBgs.forEach(bg => bg.classList.remove('animated-bg'))
  animatedBgText.forEach(bg => bg.classList.remove('animated-bg-text'))
}

async function fetchData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1/users')
  const data = await res.json()
  namee.textContent = data[7].name
  email.textContent = data[7].email
  title.textContent = data[7].company.name
  excerpt.textContent = data[7].company.bs
}