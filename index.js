const palindrome = (text = 'Malam') => {
  let result = ''
  const reversedParams = text.split('').reverse().join('')

  if (text == reversedParams) {
    result = 'palindrome'
  } else {
    result = 'not palindrome'
  }

  return result
}

console.log('Text is:', palindrome('kok'))

const reverseWords = (text = 'Saya belajar Javascript') => {
  const reversedParams = text.split(' ').reverse().join(' ')

  return reversedParams
}

console.log('Reverse words:', reverseWords())
