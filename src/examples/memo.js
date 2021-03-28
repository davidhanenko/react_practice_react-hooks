import React, { useState, useMemo, useEffect } from 'react'
import './App.css'

function complexCompute(num) {
  let i = 0
  while (i < 100000000) i++
  return num * 2
}

function App() {
  const [number, setNumber] = useState(42)
  const [colored, setColored] = useState(false)

  // const styles = {
  //   color: colored ? 'red' : 'black',
  // }

  // if not use useMemo, useEffect(depend on styles), will
  // rerender not matter what we change on page
  const styles = useMemo(() => {
    return {
      color: colored ? 'red' : 'black',
    }
  }, [colored])

  // useMemo cashed 'number' and call function complexCompute
  // only when number state change.
  // this let change styles without rerendering all component
  const computed = useMemo(() => {
    return complexCompute(number)
  }, [number])

  useEffect(() => {
    console.log('styles changed')
  }, [styles])

  return (
    <div>
      <h1 style={styles}>Counted number: {computed}</h1>
      <button onClick={() => setNumber((prev) => prev + 1)}>Add</button>
      <button onClick={() => setNumber((prev) => prev - 1)}>Substract</button>
      <button onClick={() => setColored((prev) => !prev)}>Change</button>
    </div>
  )
}

export default App
