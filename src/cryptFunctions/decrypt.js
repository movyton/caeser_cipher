const decrypt = (rotate_by, value, alphabet, setResult) => {
  const cuttedLetters = alphabet.slice(0, rotate_by)
  const shifted = alphabet.slice(rotate_by, alphabet.length)
  const merge = [...shifted, ...cuttedLetters]

  let indexes = []

  value.toUpperCase().split('').map((value) => merge.map((element, mergeIndex) => {
    return value === element ? indexes.push(mergeIndex) : null
  }))

  setResult('')

  for (let i = 0; i < indexes.length; i += 1) {
    setResult(prevRes => prevRes + alphabet[indexes[i]])
  }
}

export default decrypt