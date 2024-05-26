import React from 'react'
import { Navbar } from '../components/Navbar'
import SigninForm from '../components/SigninForm'

function Home() {
  return (
    <div className=' bg-slate-200 h-screen'>

      <Navbar />
    
      <div className='flex justify-center gap-44 py-14 min-h-max overflow-hidden'>

        <div className='flex flex-col justify-center font-sans'>
      <h1 className="text-5xl font-bold">Welcome to </h1>
      <h2 className="text-4xl font-bold">PayTM Wallet </h2>

        </div>
        <div className='flex justify-center '>
          <SigninForm />
        </div>
      </div>


    </div>
  )
}

export default Home