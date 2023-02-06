const ratings = document.querySelectorAll('.rating')
const sendBtn = document.getElementById('send')
const panel = document.getElementById('panel')
const ratingsContainer = document.querySelector('.ratings-container')

let selectedRating = 'Satisfied'

ratingsContainer.addEventListener('click', (e) => {
  if (e.target.parentNode.classList.contains('rating')) {
    removeActiveClass()
    e.target.parentNode.classList.add('active')
    selectedRating = e.target.nextElementSibling.innerHTML
  }
})

// Remove Active Class From Tha One You Click On
function removeActiveClass() {
  ratings.forEach((rating) => {
    rating.classList.remove('active')
  })
}

// Reset The Iner HTML Of Panel After Submitng Thh Review 
sendBtn.addEventListener('click', () => {
  panel.innerHTML = `
   <i class ="fas fa-heart"></i>
   <strong>Thank You!</strong>
   <br>
   <strong>Feedback : ${selectedRating}</strong>
   <p>Well Use Your Feedback To Improve Our
   Customer Support </p>
  `
})