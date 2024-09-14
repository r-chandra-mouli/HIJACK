import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { useContext, useState } from 'react'

const Context = createContext({loggedin: false});

const AppWrapper = () => {
  const [loggedin, setLoggedIn] = useState(false);

  return(
    <>
    <Context.Provider value={{loggedin, setLoggedIn}}>
    <App />
    </Context.Provider>
    
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppWrapper />
  </StrictMode>,
)

export default Context