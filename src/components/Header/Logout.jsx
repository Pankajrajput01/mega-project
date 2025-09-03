import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authslice'
import authservice from './../../appwrite/auth';

function Logout() {
    const Dispatch = useDispatch()
    const logoutHandler = ()=>{
        authservice.logout().then(() => {
            Dispatch(logout())
        })
    }
  return (
    <button
    className='inline-bock px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default Logout