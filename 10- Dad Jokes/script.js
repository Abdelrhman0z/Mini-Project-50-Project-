const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click', generateJoke)

generateJoke()

// ********** USING AXIOS **********

function generateJoke() {
  const config = {
    headers: {
      'Accept': 'application/json'
    }
  }

  axios.get('https://icanhazdadjoke.com', config).then((res) => {
    jokeEl.textContent = res.data.joke
  })
}



// ********** USING ASYNC/AWAIT **********

// async function generateJoke() {
//   const config = {
//     headers: {
//       'Accept': 'application/json'
//     }
//   }

//   const res = await fetch('https://icanhazdadjoke.com', config)
//   const data = await res.json()
//   jokeEl.textContent = data.joke
// }



// ********** USING FETCH **********

// function generateJoke() {
//   const config = {
//     headers: {
//       'Accept': 'application/json'
//     }
//   }

//   fetch('https://icanhazdadjoke.com', config).then((res) => {
//     res.json().then((data) => {
//       jokeEl.textContent = data.joke
//     })

//   })
// }


