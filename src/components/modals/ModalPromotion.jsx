import './modal.css';

const Modal = ({ childData }) => {


    const modelViwerStyle = {
        width: '900px',
        height: '800px',
        paddingTop: '70px'
    }

    const modelViwerStyleMobile = {
        width: '100%',
        height: '30rem',
    }


    return (
        <div>
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Vienda Tipo A
                            </h5>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                                onClick={() => childData(false)}
                            >
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className=" hidden lg:inline">
                                <model-viewer src="/scene.glb" ar ar-modes="scene-viewer webxr quick-look" camera-controls poster="poster.webp" shadow-intensity="1" style={modelViwerStyle}>
                                    <div class="progress-bar hide" slot="progress-bar">
                                        <div class="update-bar"></div>
                                    </div>
                                    <button slot="ar-button" id="ar-button">
                                        View in your space
                                    </button>
                                    <div id="ar-prompt">
                                        <img src="https://modelviewer.dev/shared-assets/icons/hand.png" />
                                    </div>
                                </model-viewer>

                            </div>
                            <div className="inline lg:hidden">
                                <model-viewer src="/scene.glb" ar ar-modes="scene-viewer webxr quick-look" camera-controls poster="poster.webp" shadow-intensity="1" style={modelViwerStyleMobile}>
                                    <div class="progress-bar hide" slot="progress-bar">
                                        <div class="update-bar"></div>
                                    </div>
                                    <button slot="ar-button" id="ar-button">
                                        View in your space
                                    </button>
                                    <div id="ar-prompt">
                                        <img src="https://modelviewer.dev/shared-assets/icons/hand.png" />
                                    </div>
                                </model-viewer>
                            </div>
                        </div>
                        <div className="modal-footer" />
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Modal