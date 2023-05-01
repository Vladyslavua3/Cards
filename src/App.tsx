import React from 'react'

import './App.css'

import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>
        <Link to={'/'}>
          <h1>Testing Routes</h1>
        </Link>
        <Link to={'/login'}>Login</Link>
        <Link to={'/registration'}>Registration</Link>
        <Link to={'/profile'}>Profile</Link>
        <Link to={'/resetPassword'}>Reset Password</Link>
        <Link to={'/newPassword'}>New Password</Link>
      </div>
    </div>
  )
}

export default App
