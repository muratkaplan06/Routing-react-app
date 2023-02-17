import React from 'react'

function Login() {
  return (
    <div>
      <div>
        <h2>Giriş yap</h2>
        <label htmlFor="">Email:</label>
        <input type="email" placeholder="email" />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input type="password" />
      </div>
    </div>
  )
}

export default Login
