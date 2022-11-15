import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuPromotion() {
  return (
    <div className='my-40 px-4'>
      <div className='relative py-7 h-36'>
        <Link to="/dashboard/promotion/real">
          <img className="w-full h-full  rounded-full filter brightness-50 relative" src={'/ejemplo.PNG'} />
          <p className='absolute text-2xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Realidad aumentada 1:1</p>
        </Link>
      </div>
      <div className='relative py-7  h-36'>
        <a href="https://mywebar.com/p/Project_0_6jo0m6yq39" target="_blank" rel="noreferrer">
          <img className="w-full h-full  rounded-full filter brightness-50 relative" src={'/ejemplo.PNG'} />
          <p className='absolute text-2xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Plano Realidad aumentada</p>
        </a>
      </div>
      <div className='relative py-7  h-36'>
      <a href="https://mywebar.com/p/Project_0_6jo0m6yq39" target="_blank" rel="noreferrer">
          <img className="w-full h-full  rounded-full filter brightness-50 relative" src={'/ejemplo.PNG'} />
          <p className='absolute text-2xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Mas informacion</p>
       </a>
      </div>
    </div>
  )
}
