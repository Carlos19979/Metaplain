import React from 'react'
import './login.css'

export default function login() {
  return (
    <div className="App bg-gray-900 h-screen w-screen relative overflow-hidden flex justify-center items-center">
    <div className="h-40-r w-40-r bg-gradient-to-r from-green-400 to-blue-500 rounded-full absolute left-2/3 -top-56 transform rotate-160"></div>
    <div className="h-35-r w-35-r bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full absolute top-96 -left-20 transform rotate-180"></div>
      <div className="container h-96 w-96 bg-white bg-opacity-10 rounded-2xl shadow-xl relative z-2 border border-opacity-20 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
        <form className='h-full flex flex-col justify-evenly items-center'>
          <div className='text-white font-poppins text-2xl tracking-widest'>Iniciar Sesion</div>
          <input type="text" placeholder='usuario' className='input-text'/>
          <input type="password" placeholder='contraseña' className='input-text'/>
          <input type="Submit" className='cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 '/>
        </form>
      </div>
  </div>
  )
}
