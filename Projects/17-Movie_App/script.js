const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w500'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="'
const btn = document.querySelector('.btn')
const form = document.getElementById('form')
const search = document.getElementById('search')
const main = document.getElementById('main')
getMovies(API_URL)

async function getMovies(url) {
  const res = await fetch(url)
  const data = await res.json()

  showMovies(data.results)
}

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const searchTerm = search.value

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm)

    search.value = ''
  } else {
    window.location.reload()
  }
})

function showMovies(movies) {
  main.innerHTML = ''

  movies.forEach((movie) => {
    const { title, poster_path, vote_count, release_date, video, vote_average } = movie

    const movieEl = document.createElement('div')
    movieEl.classList.add('movie')

    movieEl.innerHTML = `
    
        <img
          src="${IMG_PATH + poster_path}"
          alt="${title}"
        />
        <div class="title">
          <h3>${title}</h3>
        </div>
        <div class="release-date">
          <h4>Out on: ${release_date}</h4>
        </div>
        <div class="trailer">
          <span>Watch Trailer</span>
          <a href="${video}"><i class="fa-regular fa-circle-play"></i></a>
        </div>
        <div class="rating gold">
          <span>${vote_average} /10</span><i class="fa-solid fa-star"></i>
        </div>
    `
    main.appendChild(movieEl)
  })
}

