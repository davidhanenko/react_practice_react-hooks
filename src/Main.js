import React from 'react'
import { useAlert} from '../../alert/AlertContext'

const Main = () => {

  // const toggle = useAlertToggle()
  // using it from object from Contecxt Provider
  const {show} = useAlert()

  return (
    <div>
      <h1>Hello from Context example</h1>
      <button onClick={()=>show('Alert')} className='btn btn-success'>Show alert</button>
    </div>
  )
}

export default Main
