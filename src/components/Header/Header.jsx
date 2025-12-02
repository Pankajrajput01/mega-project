import React from 'react'
import {Container , Logo , Logout} from "../index"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const navigate = useNavigate()

  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return (
    <header className='w-full border-b border-blue-100 sticky top-0 z-40 backdrop-blur-sm' style={{background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(240,249,255,0.95))'}}>
      <Container>
        <nav className='flex items-center justify-between py-3'>
          <div className='flex items-center gap-4'>
            <Link to='/' className='flex items-center gap-2 hover:opacity-80 transition-opacity'>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzNUmHtk1gIkS9j5GiaXOvJbbRZxfrpTlPhA&s" alt="brand" className="w-10 h-10 rounded-lg object-cover shadow-sm" />
              <span className='text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent'>DevUI</span>
            </Link>
          </div>

          <ul className='flex items-center gap-1'>
            {navItems.map((items) => items.active ? (
            <li key={items.name}>
              <button
                onClick={() => navigate(items.slug)}
                className='px-4 py-2 text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all duration-200 active:bg-blue-100'
                >{items.name}</button>
            </li>) : null
            )}
            {authStatus && (
              <li className="ml-2">
                <Logout />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header