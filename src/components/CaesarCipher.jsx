import React from "react";
import { useState } from "react";
import { latin_script_letters } from "../alpabet_store";

const CaesarCipher = () => {

  const [rotate, setRotate] = useState(1)
  const [inputValue, setInputValue] = useState('')
  const [result, setResult] = useState('')

  const compare = (rotate_by, value) => {
    const cuttedLetters = latin_script_letters.slice(0, rotate_by)
    const shifted = latin_script_letters.slice(rotate_by, latin_script_letters.length)
    const merge = [...shifted, ...cuttedLetters]

    let indexes = []

    value.toUpperCase().split('').map(value => latin_script_letters.map((element, latinIndex) => {
      return value === element ? indexes.push(latinIndex) : null
    }))

    setResult('')

    for (let i = 0; i < indexes.length; i += 1) {
      setResult(prevRes => prevRes + merge[indexes[i]])
    }

  }
  return (
    <div className='encrypt'>
      <div className='encrypt__wrapper'>
        <select className='encrypt__section'>
          <option value="encrypt">encrypt</option>
          <option value="decrypt">decrypt</option>
        </select>
        <div className='encrypt__wrapper__content'>
          <div className='test'>
            <textarea
              placeholder='message'
              value={inputValue}
              onChange={event => setInputValue(event.target.value)}
              className='encrypt__wrapper__textarea-message'
            >
            </textarea>
            <div>
              <div>
                <span>shift by:</span>
                <input
                  type='number'
                  value={rotate}
                  onChange={event => setRotate(event.target.value)}
                  max={25} min={1}
                  className='encrypt__wrapper__number-rotate-input'
                />
              </div>
              <button
                onClick={() => compare(rotate, inputValue)}
                className='encrypt__wrapper__button'
              > encrypt
              </button>
            </div>
          </div>
          <div>
            <textarea
              value={result}
              onChange={e => setResult(e.target.value)}
              className='encrypt__wrapper__texteara-result'
              disabled
            >{result}</textarea>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaesarCipher