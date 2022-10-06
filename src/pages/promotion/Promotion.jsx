import React from 'react'
import Table from '../../components/table/Table';
import '@google/model-viewer';
import Map from '../../components/google-maps/GoogleMaps';
import CardVewPromotion from '../../components/cardView/CardViewPromotion'
import Modal from '../../components/modals/ModalPromotion'
import { useState } from 'react';

export default function Promotion() {





    const [data, setData] = useState()

    function childData(data) {
        setData(data)
    }

    const divStyle = {
        display: data ? "block" : "none"
    };

    const modelViwerStyle = {
        width: '100%',
        height: '300px'
    }


    return (

        <div className='mt-4 mx-3 py-3 px-3 rounded-lg overflow-hidden shadow-lg border border-separate bg-white content-center lg:grid grid-flow-row-4 grid-cols-2 p'>
            <div className='bg-white' >
                <model-viewer style={modelViwerStyle} src="/scene.glb" ar ar-modes="scene-viewer webxr quick-look" camera-controls poster="poster.webp" shadow-intensity="1" style={modelViwerStyle}>
                    <div class="progress-bar hide" slot="progress-bar">
                        <div class="update-bar"></div>
                    </div>
                    <button slot="ar-button" id="ar-button">
                        View in your space
                    </button>
                </model-viewer>

            </div>
            <div className='bg-white mb-6 sm:mb-0'>
                <div className='text-2xl mt-5'>Cullera Hills</div>
                <div className='text-left mt-3'>Ubicada en un entorno privilegiado, rodeada de naturaleza, tranquilidad y confort, con amplias zonas verdes, piscinas, zona de juego infantil y zonas destinadas a gimnasio, spa, zonas lúdicas y deportivas. Con los más altos niveles de calidad y acabados, centrándonos en los pequeños detalles para que cada vivienda se convierta en una obra singular. Todo ello a 25 minutos de Valencia.
                </div>
            </div>

            <div className='bg-white lg:mt-40'>
                <div className=' hidden sm:inline'>
                    <Table childData={childData}></Table>
                </div>
                <div className=' inline sm:hidden'>
                    <CardVewPromotion childData={childData}></CardVewPromotion>
                </div>

            </div>
            <div className='bg-white lg:m-40 md:m-8 lg:h-[30rem] h-[20rem] mt-7'>
                <Map />
            </div>
            <div style={divStyle}>
                <Modal childData={childData}></Modal>
            </div>
        </div>

    )

}



