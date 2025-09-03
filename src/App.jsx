import { useState , useEffect } from 'react'
import './App.css'
import { login , logout } from './store/authslice';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';




function App() {
  const [loading , serLoading] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
      if (userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
      }
    })
    .finally(()=> serLoading(false))
  }, [])
  
  
  return !loading ? (
    <div className='w-screen min-h-screen flex flex-wrap content-between bg-gray-400'>
      <div className='w-full items-center justify-center'>
        <Header />
        <main>
        TODO:  <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App
