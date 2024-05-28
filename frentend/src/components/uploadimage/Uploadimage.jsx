import React ,{useRef}from 'react'
import "./upimage.css"
const Uploadimage = ( { image, handleFile } ) => {

    const wrapperRef = useRef(null);
    const fileNameRef = useRef(null);
    const defaultBtnRef = useRef(null);
    const imgRef = useRef(null);

    const defaultBtnActive = () => {
        defaultBtnRef.current.click();
    };

    // const handleFileChange = (event) => {
    //     const file = event.target.files[0];
    //     if (file) {
    //         const reader = new FileReader();
    //         reader.onload = function () {
    //             const result = reader.result;
    //             imgRef.current.src = result;
    //             wrapperRef.current.classList.add('active');
    //         };
    //         reader.readAsDataURL(file);
    //     }
    //     if (event.target.value) {
    //         let valueStore = event.target.value.match(/[0-9a-zA-Z\^\&\'\@\{\}\[\]\,\$\=\!\-\#\(\)\.\%\+\~\_ ]+$/);
    //         fileNameRef.current.textContent = valueStore;
    //     }
        
    // };

    const handleCancelClick = () => {
        imgRef.current.src = '';
        wrapperRef.current.classList.remove('active');
    };
    return (
        <div>
            <div className="containerup">
                <div className="wrapperup" ref={wrapperRef}>
                    <div className="imageup">
                        <img src={image} alt="" ref={imgRef} />
                    </div>
                    <div className="contentup">
                        <div className="iconup">
                            <i className="fas fa-cloud-upload-alt"></i>
                        </div>
                        <div className="textup">
                            No photo chosen, yet!
                        </div>
                    </div>
                    <div id="cancel-btn" onClick={handleCancelClick}>
                        <i className="fas fa-times"></i>
                    </div>
                    <div className="file-name" ref={fileNameRef}>
                        photo name here
                    </div>
                </div>
                <button type='button' onClick={defaultBtnActive} id="custom-btn">Choose a Avatar</button>
                <input id="default-btn" type="file" hidden onChange={handleFile} ref={defaultBtnRef} accept="image/*"/>
            </div>
        </div>

    )
}

export default Uploadimage
