import React from 'react'
import { Link } from 'react-router-dom'

const BlogAreaAll = () => {
    return (
        <section className="blog-area space-top space-extra-bottom">
            <div className="container">
                <div className="row gx-40">
                    <div className="col-xxl-8 col-lg-7">
                        <div className="blog-single-card">
                            <div className="blog-thumb">
                                <img src="assets/img/blog/blog_s2_1.png" alt="Bizmaster" />
                                <div className="blog-date">
                                    <Link to="/blog">
                                        <span>31</span>May
                                    </Link>
                                </div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <Link to="/blog">
                                        <i className="fas fa-user" />
                                        By admin
                                    </Link>
                                    <Link to="/blog">
                                        <i className="fas fa-folder-open" />
                                        Category
                                    </Link>
                                    <Link to="/blog">
                                        <i className="fas fa-comments" />
                                        Comments (05)
                                    </Link>
                                </div>
                                <h3 className="blog-title">
                                    <Link to="/blog-details">
                                        Partnering for Business a the Success
                                    </Link>
                                </h3>
                                <p className="blog-text">
                                    Web designing in a powerful way of just not an only professions,
                                    however, in a passion Company. We have a to a tendency to believe
                                    the idea that smart
                                </p>
                                <Link to="/blog-details" className="global-btn style-border2">
                                    {" "}
                                    Read More <img src="assets/img/icon/right-icon2.svg" alt="Bizmaster" />
                                </Link>
                            </div>
                        </div>
                        <div className="blog-single-card">
                            <div className="blog-thumb">
                                <img src="assets/img/blog/blog_s2_2.png" alt="Bizmaster" />
                                <div className="blog-date">
                                    <Link to="/blog">
                                        <span>31</span>May
                                    </Link>
                                </div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <Link to="/blog">
                                        <i className="fas fa-user" />
                                        By admin
                                    </Link>
                                    <Link to="/blog">
                                        <i className="fas fa-folder-open" />
                                        Category
                                    </Link>
                                    <Link to="/blog">
                                        <i className="fas fa-comments" />
                                        Comments (05)
                                    </Link>
                                </div>
                                <h3 className="blog-title">
                                    <Link to="/blog-details">
                                        Unleash Your Business's Hidden Potential
                                    </Link>
                                </h3>
                                <p className="blog-text">
                                    Web designing in a powerful way of just not an only professions,
                                    however, in a passion Company. We have a to a tendency to believe
                                    the idea that smart
                                </p>
                                <Link to="/blog-details" className="global-btn style-border2">
                                    {" "}
                                    Read More <img src="assets/img/icon/right-icon2.svg" alt="Bizmaster" />
                                </Link>
                            </div>
                        </div>
                        <div className="blog-single-card">
                            <div className="blog-thumb">
                                <img src="assets/img/blog/blog_s2_3.png" alt="Bizmaster" />
                                <div className="blog-date">
                                    <Link to="/blog">
                                        <span>31</span>May
                                    </Link>
                                </div>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <Link to="/blog">
                                        <i className="fas fa-user" />
                                        By admin
                                    </Link>
                                    <Link to="/blog">
                                        <i className="fas fa-folder-open" />
                                        Category
                                    </Link>
                                    <Link to="/blog">
                                        <i className="fas fa-comments" />
                                        Comments (05)
                                    </Link>
                                </div>
                                <h3 className="blog-title">
                                    <Link to="/blog-details">
                                        Maximizing Profitability Through Strategic
                                    </Link>
                                </h3>
                                <p className="blog-text">
                                    Web designing in a powerful way of just not an only professions,
                                    however, in a passion Company. We have a to a tendency to believe
                                    the idea that smart
                                </p>
                                <Link to="/blog-details" className="global-btn style-border2">
                                    {" "}
                                    Read More <img src="assets/img/icon/right-icon2.svg" alt="Bizmaster" />
                                </Link>
                            </div>
                        </div>
                        <div className="pagination justify-content-center">
                            <ul>
                                <li>
                                    <Link to="/blog">1</Link>
                                </li>
                                <li>
                                    <Link to="/blog">2</Link>
                                </li>
                                <li>
                                    <Link to="/blog">3</Link>
                                </li>
                                <li>
                                    <Link to="/blog">4</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-lg-5">
                        <aside className="sidebar-area">
                            <div className="widget widget_search">
                                <h3 className="widget_title">Search Here</h3>
                                <form className="search-form">
                                    <input type="text" placeholder="Search.." />
                                    <button type="submit">
                                        <i className="fas fa-search" />
                                    </button>
                                </form>
                            </div>
                            <div className="widget widget_categories">
                                <h3 className="widget_title">Category</h3>
                                <ul>
                                    <li>
                                        <Link to="/blog">
                                            Business Growth Catalyst{" "}
                                            <img src="assets/img/icon/category-1.svg" alt="Bizmaster" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            Digital Transformation
                                            <img src="assets/img/icon/category-2.svg" alt="Bizmaster" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            Advisors Growth Catalyst
                                            <img src="assets/img/icon/category-3.svg" alt="Bizmaster" />
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/blog">
                                            Financial Advisory Partners
                                            <img src="assets/img/icon/category-4.svg" alt="Bizmaster" />
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget">
                                <h3 className="widget_title">Latest Blog</h3>
                                <div className="recent-post-wrap">
                                    <div className="recent-post">
                                        <div className="recent-post-meta">
                                            <Link to="/blog">
                                                <img src="assets/img/icon/calender.svg" alt="Bizmaster" />
                                                Jan 10, 2024
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <Link className="text-inherit" to="/blog-details">
                                                    Navigating Global Trade One Shipmen
                                                </Link>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="recent-post">
                                        <div className="recent-post-meta">
                                            <Link to="/blog">
                                                <img src="assets/img/icon/calender.svg" alt="Bizmaster" />
                                                Jan 10, 2024
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <Link className="text-inherit" to="/blog-details">
                                                    Strategic Solutions for the a Business Growth
                                                </Link>
                                            </h4>
                                        </div>
                                    </div>
                                    <div className="recent-post">
                                        <div className="recent-post-meta">
                                            <Link to="/blog">
                                                <img src="assets/img/icon/calender.svg" alt="Bizmaster" />
                                                Jan 10, 2024
                                            </Link>
                                        </div>
                                        <div className="media-body">
                                            <h4 className="post-title">
                                                <Link className="text-inherit" to="/blog-details">
                                                    Achieve Your Business Goals with Confidence
                                                </Link>
                                            </h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="widget widget_tag_cloud">
                                <h3 className="widget_title">Popular Tags</h3>
                                <div className="tagcloud">
                                    <Link to="/blog">Experts</Link>
                                    <Link to="/blog">Efficiency</Link>
                                    <Link to="/blog">Digital</Link>
                                    <Link to="/blog">Transform</Link>
                                    <Link to="/blog">Chain</Link>
                                    <Link to="/blog">Partner</Link>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default BlogAreaAll