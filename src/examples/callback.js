// use for restrict function call when some state change, but only when needed change,
// to not do not needed request to server and etc.

import React, { useState, useCallback } from 'react'
import ItemsList from './ItemsList'

function App() {
  const [colored, setColored] = useState(false)
  const [count, setCount] = useState(1)

  const styles = {
    color: colored ? 'red' : 'black',
  }

  //will rerender componet(call function) only when 'COUNT' change,
  // not every time when another state change
  const generateItemsFromAPI = useCallback(() => {
    return new Array(count).fill('').map((_, i) => `Element ${i + 1}`)
  }, [count])

  return (
    <div>
      <h1 style={styles}>Count of elements: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Add</button>
      <button onClick={() => setColored((prev) => !prev)}>Change</button>

      <ItemsList getItems={generateItemsFromAPI} />
    </div>
  )
}

export default App
