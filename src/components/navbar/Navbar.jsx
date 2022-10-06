import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa';
import {  useState } from 'react'

export default function Navbar() {
  let links = [
    {name:"DASHBOARD",link:"/dashboard"},
    {name:"PERFIL",link:"/"},
  ];

  let [open,setOpen]=useState(false);
  
  return (
    <div className='shadow-md w-full sticky top-0 left-0 z-10'>
    <div className='md:flex items-center justify-between bg-blue-400 py-4 md:px-10 px-7'>
    <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
    text-zinc-50'>
      <span className='text-3xl text-indigo-600 mr-1 pt-2 '>
      <img src='https://static.wixstatic.com/media/196d19_11c79169cefa4ac1867cc28c17c14663~mv2_d_2291_1643_s_2.png/v1/fill/w_126,h_90,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/196d19_11c79169cefa4ac1867cc28c17c14663~mv2_d_2291_1643_s_2.png' className=' h-12'/>
      </span>
    </div>
    
    <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
    <FaBars name={open ? 'close':'menu'}></FaBars>
    </div>
    <ul className={`md:flex md:items-center md:pb-0 pb-10 absolute md:static bg-blue-400  left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-00 ease-in ${open ? 'top-16 ':'top-[-490px]'}`}>
      {
        links.map((link)=>(
          <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7 right-5'>
            <Link to={link.link} className='text-zinc-50 duration-500'>{link.name}</Link>
          </li>
        ))
      }
    </ul>
    </div>
  </div>
  )
}
