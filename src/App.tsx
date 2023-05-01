import React from 'react'

import './App.css'

import { Link } from 'react-router-dom'

import { paths } from 'routes/Paths'

function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>
        <Link to={paths.PACK_LIST}>
          <h1>Testing Routes</h1>
        </Link>
        <Link to={paths.LOGIN}>Login</Link>
        <Link to={paths.REGISTRATION}>Registration</Link>
        <Link to={paths.USER_PROFILE}>Profile</Link>
        <Link to={paths.FORGOT_PASSWORD}>Reset Password</Link>
        <Link to={paths.SET_NEW_PASSWORD}>New Password</Link>
      </div>
    </div>
  )
}

export default App
