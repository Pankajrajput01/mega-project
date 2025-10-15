import { useState , useEffect } from 'react'
import './App.css'
import { login , logout } from './store/authslice';
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet , useNavigate } from 'react-router-dom';




function App() {
  const [loading , serLoading] = useState(true)
  const dispatch = useDispatch()
  const Navigate = useNavigate();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData)=>{
      if (userData){
        dispatch(login({userData}))
      }
      else{
        dispatch(logout())
        Navigate('/')

      }
    })
    .finally(()=> serLoading(false))
  }, [])
  
  
  return !loading ? (
    <div className='min-h-screen flex flex-col bg-gray-50 overflow-hidden'>
      <Header />
      <main className='flex-1'>
        <div className='w-full h-full'>
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  ) : null
}

export default App
