const palindrome = (text = 'Malam') => {
  let result = ''
  
  if (typeof text !== 'string') result = 'Format teks harus string!'

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
  let result = ''

  if (typeof text !== 'string') result = 'Format teks harus string!'

  result = text.split(' ').reverse().join(' ')

  return result
}

console.log('Reverse words:', reverseWords())
