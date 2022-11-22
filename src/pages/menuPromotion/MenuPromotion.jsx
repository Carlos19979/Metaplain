import React from 'react'
import { Link } from 'react-router-dom'
import { FaBed } from 'react-icons/fa'
import { FaShower } from 'react-icons/fa'
import { FaHouseUser } from 'react-icons/fa'
import { FaMap } from 'react-icons/fa'



export default function MenuPromotion() {
  return (
    <div>
      <div className='grid grid-cols-4 gap-2 sm:ml-20 ml-3 pt-8'>
        <div className='flex'>
          <FaBed className='text-3xl sm:text-4xl' />
          <p className='ml-2 mt-2'>3</p>
        </div>
        <div className='flex'>
          <FaShower className='text-3xl sm:text-4xl ml-2 ' />
          <p className=' mt-2 ml-2 '>1</p>
        </div>

        <div className='flex'>
          <FaHouseUser className='text-3xl sm:text-4xl' />
          <p className='mt-1'>40  m2</p>
        </div>

        <div className='flex'>
          <FaMap className='text-3xl sm:text-4xl' />
          <p className=' m-1'>60  m2</p>
        </div>

        <div className='text-left'>
          Dormitorios
        </div>

        <div className='text-left ml-2 '>
          Baños
        </div>

        <div className='text-left'>
          Edificados 
        </div>

        <div className='text-left'>
         Parcela
        </div>


      </div>
      <div className='my-20 px-4'>
        <div className='relative py-7 h-36'>
          <Link to="/dashboard/promotion/viviendas/real">
            <img className="w-full h-full   filter brightness-50 relative border rounded-md border-black " src={'/ejemplo.PNG'} />
            <p className='absolute text-2xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Realidad aumentada 1:1</p>
          </Link>
        </div>
        <div className='relative py-7  h-36 '>
          <a href="https://mywebar.com/p/Project_0_6jo0m6yq39" target="_blank" rel="noreferrer">
            <img className="w-full h-full   filter brightness-50 relative border rounded-md border-black" src={'/ejemplo.PNG'} />
            <p className='absolute text-2xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Plano Realidad aumentada</p>
          </a>
        </div>
        <div className='relative py-7  h-36'>
          <a href="https://ficsa.es/promociones/paseo-al-mar/" target="_blank" rel="noreferrer">
            <img className="w-full h-full   filter brightness-50 relative border rounded-md border-black" src={'/ejemplo.PNG'} />
            <p className='absolute text-2xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Mas informacion</p>
          </a>
        </div>
      </div>
    </div>
  )
}
