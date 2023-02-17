import './App.css'
import Home from './pages/Dashboard/Home'
import Users from './pages/Dashboard/Users'
import Contact from './pages/Dashboard/contact/Contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserDetail from './pages/Dashboard/UserDetail'
import Login from './pages/Auth/Login'
import DashboardLayout from './layouts/Dashboard/index'
import AuthLayout from './layouts/Auth/index'
import Register from './pages/Auth/Register'
import Error404 from './pages/Error404'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardLayout />}>
            <Route index element={<Home />} />
            <Route path="Users" element={<Users />} />
            <Route path="Users/:id" element={<UserDetail />} />
            <Route path="Contact" element={<Contact />} />
          </Route>
          <Route path="Auth" element={<AuthLayout />}>
            <Route index element={<Login />} />
            <Route path="Register" element={<Register />} />
          </Route>
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
