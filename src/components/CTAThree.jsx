import React from 'react'

const CTAThree = () => {
    return (
        <section className='bg-dark2 pt-1'>
            <div className="container">
                <div className="cta-area-3 bg-title">
                    <div className="row justify-content-md-between align-items-center">
                        <div className="col-lg-5">
                            <div className="title-area mb-lg-0 text-lg-start text-center">
                                <h2 className="sec-title text-white">Subscribe To Our Newsletter</h2>
                                <p className="sec-text text-white">
                                    Lorem Ipsum is simply dummy text of the printing
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <form className="newsletter-form style2">
                                <div className="form-group">
                                    <input
                                        className="form-control"
                                        type="email"
                                        placeholder="Your Email Address"
                                        required=""
                                    />
                                    <button type="submit" className="global-btn">
                                        Subscribe Now
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default CTAThree