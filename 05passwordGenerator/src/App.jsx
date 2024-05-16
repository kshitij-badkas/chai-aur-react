
import { useCallback, useEffect, useRef, useState } from 'react'

function App() {
  const [length, setLength] = useState(12);  // minimum length of password
  const [numberAllowed, setNumberAllowed] = useState(false);  // checkbox unchceked
  const [charAllowed, setCharAllowed] = useState(false);  // checkbox unchceked
  const [password, setPassword] = useState(""); // default string

  // useRef hook
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) {
      str = str + "0123456789";
    }
    if (charAllowed) {
      str = str + "!@#$%^&*()_+~`";
    }

    for (let iVal = 1; iVal <= length; iVal++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass = pass + str.charAt(char);
    }

    // call to setPassword()
    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword]);

  // copy to clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 21);  // select max 21 characters (max. length)
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 
        bg-gray-800 text-orange-500">
        <h1 className='text-white text-center my-3'>
          Chai Aur React - Password generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef} // useRef hook
          />
          <button
            onClick={copyPasswordToClipboard}
            className='outline-none bg-blue-700
             text-white px-3 py-0.5 shrink-0
              hover:bg-blue-600
             active:bg-violet-500 focus:outline-none'>
            copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type='range'
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(myEvent) => {
                setLength(myEvent.target.value)
              }}
            />
            <label>Length: {length} </label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((myPrevVal) => !myPrevVal);
              }}
            />
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((myPrevVal) => !myPrevVal);
              }}
            />
            <label htmlFor='characterInput'>Sp. Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
