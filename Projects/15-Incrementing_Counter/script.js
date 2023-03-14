const nums = document.querySelectorAll('.num')


nums.forEach(num => {
  num.textContent = '0'

  const updateCounter = function () {
    const target = +num.getAttribute('data-val')
    const value = +num.textContent

    const increment = target / 50

    if (value < target) {
      num.textContent = `${Math.ceil(value + increment)}`
      setTimeout(updateCounter, 1)
    }
    else {
      num.textContent = target
    }
  }

  updateCounter()
})