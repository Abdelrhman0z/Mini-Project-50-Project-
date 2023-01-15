const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol
}

clipboardEl.addEventListener("click", () => {
  const password = resultEl.innerText;
  navigator.clipboard.writeText(password);
  alert('Password Copied To Clipboard')
});

generateEl.addEventListener('click', () => {
  const length = +lengthEl.value
  const hasLower = lowercaseEl.checked
  const hasUpper = uppercaseEl.checked
  const hasNumber = numbersEl.checked
  const hasSymbol = symbolsEl.checked

  resultEl.innerText = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length)
})

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = ''
  const typesCount = lower + upper + number + symbol
  if (typesCount === 0) { return '' }
  const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0])

  for (let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const funcName = Object.keys(type)[0]
      generatedPassword += randomFunc[funcName]()
    })
  }

  const finalPassword = generatedPassword.slice(0, length)
  return finalPassword
}

const ASCII_CAPITAL_A = 65;
const ASCII_SMALL_A = 97;
const ASCII_ZERO = 48;
const ALPHABET_LENGTH = 26;
const SINGE_DIGITS_LENGTH = 10;

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * ALPHABET_LENGTH) + ASCII_SMALL_A)
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * ALPHABET_LENGTH) + ASCII_CAPITAL_A)
}

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * SINGE_DIGITS_LENGTH) + ASCII_ZERO)
}

function getRandomSymbol() {
  const symbols = '!@#$%^&*(){}[]=<>/,.'
  return symbols[Math.floor(Math.random() * symbols.length)]
}