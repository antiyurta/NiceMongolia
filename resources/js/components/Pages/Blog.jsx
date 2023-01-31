import blog1 from "../../../img/Blog/blog1.png";
import blog01 from "../../../img/Blog/blog01.png";
import blog02 from "../../../img/Blog/blog02.png";
function Blog() {
    return (
        <div
            className="home-blog-area section-padding30"
            style={{ backgroundColor: "#f9f9f9" }}
        >
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-tittle text-center mb-70">
                            <span>Бидний сүүлийн үеийн мэдээ</span>
                            <h2></h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="home-blog-single mb-30">
                            <div className="blog-img-cap">
                                <div className="blog-img">
                                    <img src={blog01} alt="" />
                                </div>
                            </div>
                            <div className="blog-caption">
                                <div className="blog-date text-center">
                                    <span>27</span>
                                    <p>9 Сар</p>
                                </div>
                                <div className="blog-cap">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="ti-user"></i>{" "}
                                                Jessica Temphers
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="ti-comment-alt"></i>{" "}
                                                12
                                            </a>
                                        </li>
                                    </ul>
                                    <h3>
                                        <a href="blog_details.html">
                                            Here’s what you should know before.
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="home-blog-single mb-30">
                            <div className="blog-img-cap">
                                <div className="blog-img">
                                    <img src={blog1} alt="" />
                                </div>
                            </div>
                            <div className="blog-caption">
                                <div className="blog-date text-center">
                                    <span>27</span>
                                    <p>9 Сар</p>
                                </div>
                                <div className="blog-cap">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="ti-user"></i>{" "}
                                                Jessica Temphers
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="ti-comment-alt"></i>{" "}
                                                12
                                            </a>
                                        </li>
                                    </ul>
                                    <h3>
                                        <a href="blog_details.html">
                                            Here’s what you should know before.
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6">
                        <div className="home-blog-single mb-30">
                            <div className="blog-img-cap">
                                <div className="blog-img">
                                    <img src={blog02} alt="" />
                                </div>
                            </div>
                            <div className="blog-caption">
                                <div className="blog-date text-center">
                                    <span>27</span>
                                    <p>9 Сар</p>
                                </div>
                                <div className="blog-cap">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <i className="ti-user"></i>{" "}
                                                Jessica Temphers
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <i className="ti-comment-alt"></i>{" "}
                                                12
                                            </a>
                                        </li>
                                    </ul>
                                    <h3>
                                        <a href="blog_details.html">
                                            Here’s what you should know before.
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Blog;
