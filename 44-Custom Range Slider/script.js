const range = document.getElementById('range')

range.addEventListener('input', (e) => {
  const value = +e.target.value
  const label = e.target.nextElementSibling

  const numWidth = +getComputedStyle(e.target).getPropertyValue('width').slice(0, -2)
  const numLabelWidth = +getComputedStyle(label).getPropertyValue('width').slice(0, -2)

  const max = +e.target.max
  const min = +e.target.min


  const left = value * (numWidth / max) - numLabelWidth / 2 + scale(value, min, max, 10, -10)

  label.style.left = `${left}px`
  label.innerHTML = value
})


function scale(number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}