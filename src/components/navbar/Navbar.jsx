import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoCloseSharp } from "react-icons/io5";

export default function Navbar() {
  const navigate = useNavigate();

  
  return (
    <div className='absolute top-0 right-0 my-2 mx-2 text-2xl'>
    <IoCloseSharp onClick={() => navigate(-1)} />
  </div>
  )
}
