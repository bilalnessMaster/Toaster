import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Toaster from './components/Toaster'

function App() {
    const toastRef =useRef(null)

  return (

    <>
    <Toaster ref={toastRef} />
    <div className='m-1 space-x-1'>
    <button className='mt-24 bg-green-400 text-green-950 font-semibold px-2 py-1 rounded ' onClick={()=>toastRef.current.success('log in succesfully' , 2000)}>success</button>
    <button className='mt-24 bg-red-400 text-red-950 font-semibold px-2 py-1 rounded ' onClick={()=>toastRef.current.error('wrong' , 2000)}>error</button>
    </div>
  </>
   
  
  )
}

export default App
