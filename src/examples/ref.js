// useRef save condition during work with components, but not call render!!!

import React, { useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  // const [renderCount, setRenderCount] = useState(1)
  const [value, setValue] = useState('initial')

  // useRef return OBJECT with properties, like CURRENT..
  //it let you save something between render, but not rerender component
  const renderCount = useRef(1)
  const inputRef = useRef(null)
  const prevValue = useRef('')

  // if use useEffect without second parameter it will rerender each time
  useEffect(() => {
    renderCount.current++
    console.log(inputRef.current.value)
  })

  // use useRef to wath previous value of the state:
  useEffect(() => {
    prevValue.current = value
  }, [value])

  const focus = () => inputRef.current.focus()

  return (
    <div>
      <h1>Count of renders: {renderCount.current}</h1>
      <h2>Prev count: {prevValue.current}</h2>

      <input
        ref={inputRef}
        type='text'
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />

      <button onClick={focus}>Focus</button>
    </div>
  )
}

export default App
