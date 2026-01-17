import React from 'react'
import { Link } from 'react-router-dom'

const HeroFour = () => {
    return (
        <div
            className="hero-wrapper hero-4"
            id="hero"
            style={{ backgroundImage: "url(assets/img/hero/hero_bg_4_1.png)" }}
        >
            <div className="hero-thumb4-1">
                <img src="assets/img/hero/hero_thumb_4_1.png" alt="img" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="hero-style4">
                            <h1 className="hero-title text-white">
                                Empowering Your Business{" "}
                                <span className="text-theme2">Success</span>
                            </h1>
                            <p className="hero-text">
                                A business is an organization engaged in the production, sale, or
                                provision of goods and services to meet A business is an
                                organization engaged in the production
                            </p>
                            <div className="btn-wrap">
                                <Link to="/about" className="global-btn style-border3">
                                    Learn More <i className="fas fa-arrow-right ms-2" />
                                </Link>
                                <div className="hero-tag">
                                    <div className="about-experience-tag">
                                        <span className="circle-title-anime">
                                            <span className="char1">B</span>
                                            <span className="char2">e</span>
                                            <span className="char3">s</span>
                                            <span className="char4">t</span>
                                            <span className="char5"> </span>
                                            <span className="char6">W</span>
                                            <span className="char7">o</span>
                                            <span className="char8">r</span>
                                            <span className="char9">k</span>
                                            <span className="char10">i</span>
                                            <span className="char11">n</span>
                                            <span className="char12">g</span>
                                            <span className="char13"> </span>
                                            <span className="char14">S</span>
                                            <span className="char15">i</span>
                                            <span className="char16">n</span>
                                            <span className="char17">c</span>
                                            <span className="char18">e</span>
                                            <span className="char19"> </span>
                                            <span className="char20">1</span>
                                            <span className="char21">9</span>
                                            <span className="char22">9</span>
                                            <span className="char23">7</span>
                                        </span>
                                    </div>
                                    <div className="hero-tag_icon">
                                        <i className="fas fa-arrow-right" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default HeroFour