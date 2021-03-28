import React, { useEffect, useState } from 'react'

function useLogger(value) {
  useEffect(() => {
    console.log('Value changed: ', value)
  }, [value])
}

function useInput(initialValue) {
  const [value, setValue] = useState(initialValue)

  const onChange = (event) => {
    setValue(event.target.value)
  }

  const clear = () => setValue('')

  return {
    // use bind for grouping properties to avoid errors and possibilitie of spreading in input
    bind: { value, onChange },
    value,
    clear,
  }
}

function App() {
  const input = useInput('')
  const lastName = useInput('')

  useLogger(input.value)

  return (
    <div className='container pt-3'>
      {/* <input type='text' value={input.value} onChange={input.onChange} /> */}
      <input type='text' {...input.bind} />
      {/* <input type='text' {...lastName} /> */}
      <button className='btn btn-secondary' onClick={() => input.clear()}>
        Clear
      </button>

      <hr />
      <h1>{input.value}</h1>
      <h1>{lastName.value}</h1>
    </div>
  )
}

export default App
