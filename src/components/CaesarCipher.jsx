import React from "react";
import { useState } from "react";
import { latin_alphabet } from "../data/alpabet_store";
import encrypt from '../cryptFunctions/encrypt'
import decrypt from "../cryptFunctions/decrypt";

const CaesarCipher = () => {

  const [rotate, setRotate] = useState(1)
  const [inputValue, setInputValue] = useState('')
  const [result, setResult] = useState('')
  const [cryptAction, setCryptAction] = useState('encrypt')

  return (
    <div className='encrypt'>
      <div className='encrypt__wrapper'>
        <select className='encrypt__section'
          value={cryptAction}
          onChange={event => {
            setCryptAction(event.target.value)
          }}
        >
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
                onClick={() => {
                  cryptAction === 'encrypt' ?
                    encrypt(rotate, inputValue, latin_alphabet, setResult) :
                    decrypt(rotate, inputValue, latin_alphabet, setResult)
                }
                }
                className='encrypt__wrapper__button'
              >
                {
                  cryptAction === 'encrypt' ?
                    'encrypt' :
                    'decrypt'
                }
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
    </div >
  )
}

export default CaesarCipher