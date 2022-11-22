import React from 'react'
import { Link } from 'react-router-dom'

export default function CardViewVivienda() {
    return (
        <div className='px-5'>
            <div className='grid grid-cols-2 mt-20 border rounded-md border-black'>
                <div className='col-span-2 bg-white  text-center font-medium rounded-md'>
                    Vivienda tipo A
                </div>
                <Link to="menu" className='col-span-2'>
                    <img className="w-full h-20 col-span-2 rounded-md" src={'/ejemplo.PNG'} onClick />
                </Link>
            </div>
        </div>

    )
}
