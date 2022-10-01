import { useState } from 'react';
import { latin_script_letters } from './alpabet_store'
import CaesarCipher from './components/CaesarCipher';

function App() {  

  return (
    <div className="App">
      <CaesarCipher/>
    </div>
  );
}

export default App;