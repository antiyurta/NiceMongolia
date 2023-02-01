import { Button, Form, Input, Modal, notification } from "antd";
import { useState } from "react";
import loadLogo from "../../../img/companyLogo.png";
import icon from "../../../img/marker.png";
import Footer from "./Footer";
import Header from "./Header";
import Services from "./Services";
import GoogleMapReact from "google-map-react";
import Blog from "./Blog";
function Home() {
    const [api, contextHolder] = notification.useNotification();
    const [loadingButton, setLoadingButton] = useState(false);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const data = [
        {
            lat: 47.99515751690807,
            lng: 106.92554843851593,
        },
    ];
    const defaultProps = {
        center: {
            lat: 47.99515751690807,
            lng: 106.92554843851593,
        },
        zoom: 3,
    };
    const markerStyle = {
        position: "absolute",
        width: 20,
    };
    function CustomMarker({ lat, lng, onMarkerClick }) {
        return (
            <div onClick={onMarkerClick} lat={lat} lng={lng}>
                <img style={markerStyle} src={icon} alt="icon" />
            </div>
        );
    }
    function handleMarkerClick() {
        console.log("Click");
    }
    const openNotificationWithIcon = (type) => {
        api[type]({
            message: "Утасны дугаар эсвэл барааны код",
            description: "Утасны дугаар эсвэл барааны код хоосон байж болохгүй",
        });
    };
    const onFinish = async (values) => {
        // setLoadingButton(true);
        setIsOpenModal(true);
    };
    const onFinishFailed = (errorInfo) => {
        if (errorInfo) {
            openNotificationWithIcon("info");
        }
    };
    return (
        <>
            <div id="preloader-active">
                <div className="preloader d-flex align-items-center justify-content-center">
                    <div className="preloader-inner position-relative">
                        <div className="preloader-circle"></div>
                        <div className="preloader-img pere-text">
                            <img src={loadLogo} alt="loadingLogo" />
                        </div>
                    </div>
                </div>
            </div>
            <Header />
            <main>
                <div className="slider-area ">
                    <div className="slider-active">
                        <div className="single-slider slider-height d-flex align-items-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-9 col-lg-9">
                                        <div className="hero__caption">
                                            <h1>
                                                Аюулгүй, Найдвартай{" "}
                                                <span>Логистик</span> Шийдэл!
                                            </h1>
                                        </div>
                                        <Form
                                            onFinish={onFinish}
                                            onFinishFailed={onFinishFailed}
                                            className="search-box"
                                        >
                                            <Form.Item
                                                className="input-form"
                                                name="code"
                                                rules={[
                                                    {
                                                        required: true,
                                                        message: "asdsa",
                                                    },
                                                ]}
                                            >
                                                <Input
                                                    type="text"
                                                    placeholder="Утасны дугаар эсвэл барааны код"
                                                />
                                            </Form.Item>
                                            <Form.Item className="search-form">
                                                <Button
                                                    type="link"
                                                    htmlType="submit"
                                                    loading={loadingButton}
                                                >
                                                    Харах
                                                </Button>
                                            </Form.Item>
                                        </Form>
                                        {contextHolder}
                                        <div className="hero-pera">
                                            <p>For order status inquiry</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="our-info-area pt-70 pb-40">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-info mb-30">
                                    <div className="info-icon">
                                        <span className="flaticon-support"></span>
                                    </div>
                                    <div className="info-caption">
                                        <p>Хэзээ ч бидэнтэй холбогдоорой</p>
                                        <span>7015-7878 , 8999-7878</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-info mb-30">
                                    <div className="info-icon">
                                        <span className="flaticon-clock"></span>
                                    </div>
                                    <div className="info-caption">
                                        <p>Ням гаригт амарна</p>
                                        <span>Даваа - Бямба 8.00 - 18.00</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="single-info mb-30">
                                    <div className="info-icon">
                                        <span className="flaticon-place"></span>
                                    </div>
                                    <div className="info-caption">
                                        <p>Монгол Улаанбаатар</p>
                                        <span>
                                            Чингэлтэй дүүрэг, 19-р хороо, 7-н
                                            буудлаас хойш Зуслангийн чиглэлд
                                            500м-т зам дагуу
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Services />
            </main>
            <Footer />
            <Modal
                title="Бараа харах"
                open={isOpenModal}
                onCancel={() => setIsOpenModal(false)}
                cancelText="Гарах"
                okButtonProps={{ disabled: true, style: { display: "none" } }}
            >
                <div style={{ height: "500px", width: "100%" }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "" }}
                        defaultCenter={defaultProps.center}
                        defaultZoom={defaultProps.zoom}
                    >
                        {data.map((item, idx) => {
                            return (
                                <CustomMarker
                                    onMarkerClick={handleMarkerClick}
                                    key={idx}
                                    lat={item.lat}
                                    lng={item.lng}
                                />
                            );
                        })}
                    </GoogleMapReact>
                </div>
            </Modal>
            <div id="back-top">
                <a title="Go to Top" href="#">
                    {" "}
                    <i className="fas fa-level-up-alt"></i>
                </a>
            </div>
        </>
    );
}
export default Home;
