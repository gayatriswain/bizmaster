import React from 'react'

const HeroFive = () => {
    return (
        <section className='bg-dark2'>
            <div
                className="hero-wrapper hero-5"
                id="hero"
                style={{ backgroundImage: "url(assets/img/hero/hero_bg_5_1.png)" }}
            >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="hero-style5 text-center">
                                <h1 className="hero-title text-white">
                                    Revolutionizing the Unique
                                    <span className="text-theme2">Business</span> Landscape
                                </h1>
                                <p className="hero-text text-white">
                                    A business consultant is a professional who provides expert advice
                                    and guidance to businesses on various aspects such
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="hero-thumb5-1">
                                <img src="assets/img/hero/hero_thumb_5_1.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default HeroFive