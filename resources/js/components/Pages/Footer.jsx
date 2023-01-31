import logo from "../../../img/logo.png";
function Footer() {
    const today = new Date();
    let copy = String.fromCodePoint(0x000a9);
    return (
        <footer id={"footer"}>
            <div className="footer-area footer-bg">
                <div className="container">
                    <div className="footer-top footer-padding">
                        <div className="footer-heading">
                            <div className="row justify-content-between">
                                <div className="col-xl-6 col-lg-8 col-md-8">
                                    <div className="wantToWork-caption wantToWork-caption2">
                                        <h2>
                                            We Understand The Importance
                                            Approaching Each Work!
                                        </h2>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4">
                                    <span className="contact-number f-right">
                                        7015-7878 , 8999-7878
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="row d-flex justify-content-between">
                            <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>COMPANY</h4>
                                        <ul>
                                            <li>
                                                <a href="#">About Us</a>
                                            </li>
                                            <li>
                                                <a href="#">Company</a>
                                            </li>
                                            <li>
                                                <a href="#"> Press & Blog</a>
                                            </li>
                                            <li>
                                                <a href="#"> Privacy Policy</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>Open hour</h4>
                                        <ul>
                                            <li>
                                                <a href="#">Monday 11am-7pm</a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    {" "}
                                                    Tuesday-Friday 11am-8pm
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    {" "}
                                                    Saturday 10am-6pm
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"> Sunday 11am-6pm</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-tittle">
                                        <h4>RESOURCES</h4>
                                        <ul>
                                            <li>
                                                <a href="#">Home Insurance</a>
                                            </li>
                                            <li>
                                                <a href="#">Travel Insurance</a>
                                            </li>
                                            <li>
                                                <a href="#"> Car Insurance</a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    {" "}
                                                    Business Insurance
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#"> Heal Insurance</a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-md-5 col-sm-6">
                                <div className="single-footer-caption mb-50">
                                    <div className="footer-logo">
                                        <a href="index.html">
                                            <img src={logo} alt="logo" />
                                        </a>
                                    </div>
                                    <div className="footer-tittle">
                                        <div className="footer-pera">
                                            <p className="info1">
                                                GThe trade war currently ensuing
                                                between te US anfd several
                                                natxions around thdhe globe,
                                                most fiercely with.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="footer-social ">
                                        <a href="https://www.facebook.com/sai4ull">
                                            <i className="fab fa-facebook-f"></i>
                                        </a>
                                        <a href="">
                                            <i className="fab fa-twitter"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fas fa-globe"></i>
                                        </a>
                                        <a href="#">
                                            <i className="fab fa-instagram"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="row d-flex align-items-center">
                            <div className="col-lg-12">
                                <div className="footer-copy-right text-center">
                                    <p>{`Copyright ${copy} ${new Date(
                                        today
                                    ).getFullYear()} All rights reserved`}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;
