import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import './styles.css'

function AuthLayout() {
  return (
    <div className="auth-container">
      <div className="auth-menu">
        <Link to="/Auth">Giriş yap</Link>
        <Link to="/Auth/Register">Kayıt ol</Link>
      </div>
      <hr />
      <Outlet />
    </div>
  )
}

export default AuthLayout
