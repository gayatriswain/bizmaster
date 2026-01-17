import React, { useState } from 'react'
import ModalVideo from 'react-modal-video';
const VideoAreaOne = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <><section className='bg-dark'>
            <div className="video-area-1">
                <div className="container">
                    <div className="video-wrap">
                        <img src="assets/img/normal/video-thumb-1-1.png" alt="img" />
                        <span
                            className="play-btn style5 popup-video"
                        >
                            <i className="fas fa-solid fa-play" onClick={() => setOpen(true)} />
                        </span>
                    </div>
                </div>
            </div>

        </section>
            <ModalVideo
                channel="youtube"
                youtube={{ mute: 0, autoplay: 0 }}
                isOpen={isOpen}
                videoId="8dTfgnkmJGs"
                onClose={() => setOpen(false)}
            />
        </>

    )
}

export default VideoAreaOne