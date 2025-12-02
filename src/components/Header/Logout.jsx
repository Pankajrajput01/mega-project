import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../../store/authSlice'
import authservice from './../../appwrite/auth';

function Logout() {
    const Dispatch = useDispatch()
    const logoutHandler = ()=>{
        authservice.logout().then(() => {
            Dispatch(logout())
            window.location.reload();
        })
    }
  return (
    <button
    className='px-5 py-2 text-sm font-semibold text-red-600 hover:text-white hover:bg-red-600 bg-red-50 border border-red-200 rounded-lg transition-all duration-200 active:scale-95'
    onClick={logoutHandler}
    >Logout</button>
  )
}

export default Logout