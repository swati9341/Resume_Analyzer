import { useState } from 'react'

import './App.css'
import {Navigate, Outlet} from 'react-router-dom'
import  Home from  './Home/index.jsx'
import Dashboard  from  './Dashboard/index.jsx'
import { useUser } from '@clerk/clerk-react'

function App() {
  const [count, setCount] = useState(0)
  const {user,isloaded,isSignedIn}=useUser();
  if(!isSignedIn && isloaded){
    return < Navigate to ={'/auth/sign-in'}/>

  }
  return (
    <>

      <Outlet />
  
    </>
  )
}

export default App
