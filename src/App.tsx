import React from 'react'

import './App.css'

import { Link, Route, Routes } from 'react-router-dom'

import { Test } from './common/Test'
import { Error } from './components/Error/Error'
import { Login } from './components/Login/Login'
import { NewPass } from './components/Password/NewPass/NewPass'
import { ResetPass } from './components/Password/ResetPass/ResetPass'
import { Profile } from './components/Profile/Profile'
import { Registration } from './components/Registration/Registration'

function App() {
  return (
    <div className="App">
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center', justifyContent: 'center' }}>
        <h1>Testing Routes</h1>
        <Link to={'/login'}>Login</Link>
        <Link to={'/registration'}>Registration</Link>
        <Link to={'/profile'}>Profile</Link>
        <Link to={'/404'}>404</Link>
        <Link to={'/resetpass'}>Reset Password</Link>
        <Link to={'/newpass'}>New Password</Link>
        <Link to={'/test'}>Test</Link>
      </div>
      <Routes>
        <Route path={'/login'} element={<Login />} />
        <Route path={'/registration'} element={<Registration />} />
        <Route path={'/profile'} element={<Profile />} />
        <Route path={'/404'} element={<Error />} />
        <Route path={'/resetpass'} element={<ResetPass />} />
        <Route path={'/newpass'} element={<NewPass />} />
        <Route path={'/test'} element={<Test />} />
      </Routes>
    </div>
  )
}

export default App
