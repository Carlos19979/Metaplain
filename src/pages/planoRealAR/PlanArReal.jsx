import React from 'react'

export default function PlanArReal() {

    const modelViwerStyleMobile = {
        width: '100%',
        height: '100vh',
        marginTop: '3vh'
    }

    return (
        <div className='w-full h-5/6'>
            <model-viewer src="/apartment.glb" ar ar-modes="scene-viewer webxr quick-look" camera-controls poster="poster.webp" shadow-intensity="1"
            style={modelViwerStyleMobile}>
                <div class="progress-bar hide" slot="progress-bar">
                    <div class="update-bar"></div>
                </div>
                <button slot="ar-button" id="ar-button">
                    Ver en escala 1:1
                </button>
            </model-viewer>
        </div>
    )
}
