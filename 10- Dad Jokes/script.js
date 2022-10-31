const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// ********** USING AXIOS **********

function generateJoke() {
  jokeBtn.disabled = true
  const config = {
    headers: {
      'Accept': 'application/json'
    }
  }

  axios.get('https://icanhazdadjoke.com', config).then((res) => {
    jokeEl.textContent = res.data.joke
  }).finally(() => {
    jokeBtn.disabled = false
  })
}



// ********** USING ASYNC/AWAIT **********

// async function generateJoke() {
//   jokeBtn.disabled = true
//   const config = {
//     headers: {
//       'Accept': 'application/json'
//     }
//   }

//   const res = await fetch('https://icanhazdadjoke.com', config)
//   const data = await res.json()
//   jokeEl.textContent = data.joke
//   jokeBtn.disabled = false
// }



// ********** USING FETCH **********

// function generateJoke() {
//   jokeBtn.disabled = true
//   const config = {
//     headers: {
//       'Accept': 'application/json'
//     }
//   }

//   fetch('https://icanhazdadjoke.com', config).then((res) => {
//     res.json().then((data) => {
//       jokeEl.textContent = data.joke

//     })
//     jokeBtn.disabled = false
//   })

// }


