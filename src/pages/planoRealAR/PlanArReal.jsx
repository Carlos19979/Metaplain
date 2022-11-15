import React from 'react'

export default function PlanArReal() {

    const modelViwerStyleMobile = {
        width: '100%',
        height: '100vh',
        marginTop: '3vh'
    }

    return (
        <model-viewer src="/apartment.glb"  ar ar-modes="scene-viewer webxr quick-look" camera-controls poster="poster.webp" shadow-intensity="1" style={modelViwerStyleMobile}>
        <button slot="ar-button" id="ar-button" className='mb-40'>
            Ver en escala real
        </button>
        </model-viewer>
    )
}
