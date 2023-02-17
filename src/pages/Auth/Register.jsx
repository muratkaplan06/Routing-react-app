import React from 'react'

function Register() {
  return (
    <div>
      <div>
        <h2>Kayıt Ol</h2>
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

export default Register
