import React from 'react'
import { Link } from 'react-router-dom'
export default function CardViewPromotion({ childData }) {

    return (
        <div className='px-5'>
            <div className='grid grid-cols-2 mt-20'>
                <div className='col-span-2 bg-white  text-left font-medium'>
                    Vivienda tipo A
                </div>
                <Link to="menu" className='col-span-2'>
                    <img className="w-full h-full col-span-2" src={'/ejemplo.PNG'} onClick />
                </Link>
            </div>
        </div>

    )
}

