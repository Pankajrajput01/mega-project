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
    <header className='py-3 shadow bg-gray-800 w-full'>
      <Container>
        <nav className='flex items-center justify-between'>
          <div className='flex items-center'>
            <Link to='/'>
              <Logo width='70px'/>
            </Link>
          </div>
          <ul className='flex items-center gap-4'>
            {navItems.map((items) => items.active ? (
            <li key={items.name}>
              <button
                onClick={() => navigate(items.slug)}
                className='inline-block px-4 py-2 text-white font-medium'
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