import React from 'react'
import { useAlert } from './AlertContext'

const Alert = () => {
  const alert = useAlert()

  // if (!alert) return null
  if (!alert.visible) return null

  // return <div className='alert alert-danger'>This is important message!!!</div>
  return (
    <div className='alert alert-danger' onClick={alert.hide}>
     {alert.text}
    </div>
  )
}

export default Alert
