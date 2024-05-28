import React, { useRef } from 'react';
import './uploadvideo.css'; // Make sure to import your CSS file for styling

const Uploadvideo = ({handleVideo ,}) => {
    const wrapperRef = useRef(null);
    const fileNameRef = useRef(null);
    const defaultBtnRef = useRef(null);
    const videoRef = useRef(null);

    const defaultBtnActive = () => {
        defaultBtnRef.current.click();
    };



    const handleCancelClick = () => {
        videoRef.current.src = '';
        wrapperRef.current.classList.remove('active');
    };

    return (
        <div>
            <div className="containerup">
                <div className="wrapperup" ref={wrapperRef}>
                    <div className="video-up">
                        <video controls ref={videoRef} />
                    </div>
                    <div className="contentup">
                        <div className="iconup">
                            <i className="fas fa-cloud-upload-alt"></i>
                        </div>
                        <div className="textup">
                            No video chosen, yet!
                        </div>
                    </div>
                    <div id="cancel-btn" onClick={handleCancelClick}>
                        <i className="fas fa-times"></i>
                    </div>
                    <div className="file-name" ref={fileNameRef}>
                        Video name here
                    </div>
                </div>
                <button type='button' onClick={defaultBtnActive} id="custom-btn">Choose a video</button>
                <input id="default-btn" type="file" hidden onChange={handleVideo} ref={defaultBtnRef} accept=".mp4" />
            </div>
        </div>
    );
};

export default Uploadvideo;
