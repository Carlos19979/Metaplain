import React from 'react'

export default function CardViewPromotion({ childData }) {

    return (
        <div className='grid grid-cols-2 gap-4 bg-slate-200'>
            <div className='col-span-2 bg-white'>
                Vivienda tipo A
            </div>
            <div>
                <div>
                    Dormitorios
                </div>
                <div>
                    Baños
                </div>
                <div>
                    Superficie
                </div>
                <div>
                    Precio
                </div>
            </div>
            <div className='text-left'>
                <div>
                    2
                </div>
                <div>
                    2
                </div>
                <div>
                    210 m2
                </div>
                <div>
                    300000
                </div>
            </div>
            <div className='col-span-2'>

                <button className='bg-slate-200 text-cyan-600' onClick={() => childData(true)}>
                    Visualizar en AR
                </button>
            </div>
        </div>
    )
}
