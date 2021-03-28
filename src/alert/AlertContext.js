import React, { useContext, useReducer } from 'react'

const AlertContext = React.createContext()
// const AlertToggleContext = React.createContext()

export const useAlert = () => {
  return useContext(AlertContext)
}

// export const useAlertToggle = () => {
//   return useContext(AlertToggleContext)
// }

const SHOW_ALERT = 'show'
const HIDE_ALERT = 'hide'

const reducer = (state, action) => {
  switch (action.type) {
    case SHOW_ALERT:
      return {
        ...state,
        visible: true,
        text: action.text
      }
    case HIDE_ALERT:
      return {
        ...state,
        visible: false,
      }
    default:
      return state
  }
}

export const AlertProvider = ({ children }) => {
  // const [alert, setAlert] = useState(false)
  // const toggle = () => setAlert((prev) => !prev)

  // useReducer take reducer and state, and return state + dispatch
  // let us manipulate with the state 
  const [state, dispatch] = useReducer(reducer, {
    visible: false,
    text: ''
  })

  const show = (text) => dispatch({ type: SHOW_ALERT, text })
  const hide = () => dispatch({ type: HIDE_ALERT })

  return (
    // instead of use another provider for TOGGLE, we add it like OBJECT to first provider
    <AlertContext.Provider
      value={{
        visible: state.visible,
        text: state.text,
        show,
        hide,
      }}
    >
      {children}
    </AlertContext.Provider>
  )
}
