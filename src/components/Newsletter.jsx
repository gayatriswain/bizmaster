import React from 'react'

const Newsletter = () => {
    return (
        <div className="container">
            <div className="footer-top-1 bg-theme">
                <div className="footer-top-content">
                    <h3 className="footer-top-title text-white">Newsletter</h3>
                    <p className="footer-top-text">
                        Lorem Ipsum is simply dummy text of the printing
                    </p>
                </div>
                <form className="newsletter-form">
                    <div className="form-group">
                        <input
                            className="form-control"
                            type="email"
                            placeholder="Email Address"
                            required=""
                        />
                        <button type="submit" className="global-btn">
                            Subscribe
                            <span className="icon">
                                <i className="fa-sharp fas fa-paper-plane ms-2" />
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>

    )
}

export default Newsletter