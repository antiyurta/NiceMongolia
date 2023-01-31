import logo from "../../../img/logo.png";
function Header() {
    return (
        <header id={"home"}>
            <div className="header-area">
                <div className="main-header">
                    <div className="header-top d-none d-lg-block">
                        <div className="container">
                            <div className="w-full">
                                <div className="row d-flex justify-content-between align-items-center">
                                    <div className="header-info-left">
                                        <ul>
                                            <li>Утас: 7015-7878 , 8999-7878</li>
                                            <li>
                                                И-мэйл: noreply@yourdomain.com
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="header-info-right">
                                        <ul className="header-social">
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-twitter"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-facebook-f"></i>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    <i className="fab fa-linkedin-in"></i>
                                                </a>
                                            </li>
                                            <li>
                                                {" "}
                                                <a href="#">
                                                    <i className="fab fa-google-plus-g"></i>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-bottom  header-sticky">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-2 col-lg-2">
                                    <div
                                        className="logo"
                                        style={{ width: "171px" }}
                                    >
                                        <img src={logo} alt="logo" />
                                    </div>
                                </div>
                                <div className="col-xl-10 col-lg-10">
                                    <div className="menu-wrapper  d-flex align-items-center justify-content-end">
                                        <div className="main-menu d-none d-lg-block">
                                            <nav>
                                                <ul id="navigation">
                                                    <li>
                                                        <a href="#home">Нүүр</a>
                                                    </li>
                                                    <li>
                                                        <a href="about.html">
                                                            Тухай
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#services">
                                                            Үйлчилгээ
                                                        </a>
                                                    </li>
                                                    <li>
                                                        <a href="#footer">
                                                            Холбоо барих
                                                        </a>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="mobile_menu d-block d-lg-none"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Header;
