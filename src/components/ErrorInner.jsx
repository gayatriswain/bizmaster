import React from 'react'
import { Link } from 'react-router-dom'

const ErrorInner = () => {
    return (
        <section className="error-section">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="wrapper">
                            <div
                                className="img-file"

                            >
                                <img
                                    className="img-fluid"
                                    src="/assets/img/error.png"
                                    alt="Bizmaster"
                                />
                            </div>
                            <div className="text-file">
                                <h4 >
                                    Page not found!</h4>
                                <p >
                                    Sorry, we can't find that page! The page you are looking for <br />
                                    It never existed.
                                </p>
                            </div>
                            <div
                                className="d-adjust"
                            >
                                <Link className="global-btn" to="/">
                                    Go to the home page</Link>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default ErrorInner