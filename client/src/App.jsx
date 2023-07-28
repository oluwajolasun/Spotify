import { useEffect, useState } from 'react'
import './App.css'

import Login from './components/Login'
import Profile from './components/Profile'

import { setAccessToken } from "./api"

function App() {
  const [token, setToken] = useState("")

  useEffect(() => {
    setToken(setAccessToken())
  }, [])

  return (
    <div>
      { token ? <Profile /> : <Login /> }
    </div>
  )
}

export default App
