import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // Hooks
  let [iCounter, mySetCounter] = useState(15)

  //let iCounter = 15
  const addValue = () => {
    // iCounter should not be greater than 20
    if (iCounter < 20) {
      iCounter = iCounter + 1;
      mySetCounter(iCounter);
    }
    else
    {
      // reset to 0
      mySetCounter(0);
    }
  }

  const decreaseValue = () => {
    // iCounter should not be less than 0
    if (iCounter > 0) {
      mySetCounter(iCounter - 1);
    }
    else
    {
      // reset to 15
      mySetCounter(15);
    }
  }

  return (
    <>
      <h1>Chai aur React! Using Hooks...</h1>
      <h2>Counter value : {iCounter} </h2>

      <button onClick={addValue}>Add Value {iCounter} </button>
      <br></br>
      <button onClick={decreaseValue}>Decrease Value {iCounter} </button>
    </>
  )
}

export default App
