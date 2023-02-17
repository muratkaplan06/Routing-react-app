import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

function UserDetail() {
  const { id } = useParams()
  const location = useLocation()
  const [user, setUser] = useState(location.state)
  useEffect(() => {
    if (!user?.id) {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => setUser(data))
    }
  }, [id, user])
  console.log(location)
  return (
    <div>
      <h2>Kişi Bilgisi</h2>
      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}

      <Link to={`/users/${Number(id) + 1}`}>Sonraki Kullanıcıs</Link>
    </div>
  )
}

export default UserDetail
