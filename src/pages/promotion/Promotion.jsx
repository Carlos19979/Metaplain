import React from 'react'
import '@google/model-viewer';
import GoogleMaps from '../../components/google-maps/GoogleMaps'
import { Link } from 'react-router-dom'
import { FaHouseUser } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa'

export default function Promotion() {


    const modelViwerStyleMobile = {
        width: '100%',
        height: '30rem',
    }


    return (
        <div className='px-5'>
            <model-viewer src="/apartment_building_-_3d_model.glb" ar ar-modes="scene-viewer webxr quick-look" ar-scale="fixed" camera-controls poster="poster.webp" shadow-intensity="1" style={modelViwerStyleMobile}>
                <div className="update-bar"></div>
                <button slot="ar-button" id="ar-button" className='rounded-none'>
                    Ver en tu espacio
                </button>
            </model-viewer >
            <p className='py-9 text-left'>
            La nueva Promoción de Ficsa, el Edificio "Paseo al Mar", está ubicada entre las calles José Ballester y Esteban Ballester, en el distrito Poblats Maritims a escasos 150 metros de la avenida Blasco Ibañez y a un paso de la estación de tren Valencia-Cabanyal y del Mercado del Cabanyal. Tu futuro hogar se encontrará en un Edificio de nueva construcción con 25 viviendas y 5 áticos, excelentes calidades y distribuciones de 1 a 4 dormitorios. También dispone de plazas de aparcamiento y trasteros. Un Edificio versátil y muy luminoso con espacios diseñados para ti y acabados que se adaptan a tus necesidades. Vive rodeado de todos los servicios necesarios en un entorno consolidado y muy próximo a la playa, vive a un "Paseo del Mar". Previsión inicio de obras: 4º trimestre 2022.
            </p>

            <div className='grid grid-cols-2  mb-10'>

                <a href="https://ficsa.es/promociones/paseo-al-mar/" className='ml-5 bg-white border rounded-md flex h-10' target="_blank" rel="noreferrer">

                <FaGoogle className='mt-2 mx-2 text-lg'/>
                    <p className='mt-1 text-blue-400'>Nuestra web</p>
                </a>
                <Link className='ml-5 bg-white border rounded-md flex ' to="/dashboard/promotion/viviendas">
                    <FaHouseUser className='mx-2 mt-2 text-lg'/>
                    <p className='mt-1 text-blue-400'> Ver viviendas</p>
                   
                </Link>


            </div>

            <div className='h-80 py-7 sm:h-96'>
                <GoogleMaps />
            </div>


        </div>

    )

}



