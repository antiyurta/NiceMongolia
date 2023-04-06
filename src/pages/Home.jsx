import React, { useState } from 'react';
import '../style/home.css';
import {
   GoogleMap,
   Marker,
   withGoogleMap,
   withScriptjs
} from 'react-google-maps';
import axios from 'axios';
import { Button, Form, Input, Modal, Spin } from 'antd';
import { openNofi } from '../comman';
import { LoadingOutlined } from '@ant-design/icons';
import MapDirectionsRenderer from './MapDirection';
import { Container } from 'react-bootstrap';
import support from '../assets/home/support.png';
import clock from '../assets/home/clock.png';
import address from '../assets/home/address.png';
const DEV_URL = process.env.REACT_APP_DEV_URL;
const { Search } = Input;
function Home() {
   const [form] = Form.useForm();
   const [order, setOrder] = useState({});
   const [orderStatus, setOrderStatus] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [places, setPlaces] = useState([]);
   const [isOpenOrderModal, setIsOpenOrderModal] = useState(false);
   const Map = withScriptjs(
      withGoogleMap((props) => (
         <GoogleMap
            defaultCenter={props.defaultCenter}
            defaultZoom={props.defaultZoom}
         >
            {props.places.map((marker, index) => {
               const position = {
                  lat: parseFloat(marker.latitude),
                  lng: parseFloat(marker.longitude)
               };
               return <Marker key={index} position={position} />;
            })}
            <MapDirectionsRenderer
               places={props.places}
               // travelMode={window.google.maps.TravelMode.DRIVING}
            />
         </GoogleMap>
      ))
   );
   const statusChecker = (id) => {
      var status = [
         {
            id: 1,
            type: '',
            label: 'Хүлээн авсан'
         },
         {
            id: 2,
            type: '',
            label: 'Ачилт хийгдсэн'
         },
         {
            id: 3,
            type: '',
            label: 'Тээвэрт гарсан'
         },
         {
            id: 4,
            type: '',
            label: 'Буулгалт хийгдсэн'
         },
         {
            id: 5,
            type: '',
            label: 'Хүлээлгэн өгсөн'
         }
      ];
      var state = false;
      status.map((item, index) => {
         if (state === false && item.id != id) {
            status[index]['type'] = 'is-done';
         } else if (state === false && item.id === id) {
            status[index]['type'] = 'current';
            state = true;
         } else {
            status[index]['type'] = 'un-done';
         }
      });
      setOrderStatus(status);
   };
   const searchOrder = async (values) => {
      setIsLoading(true);
      setOrderStatus([]);
      setOrder({});
      const conf = {
         params: {
            body: JSON.stringify({
               Command: 'GetCargo',
               Parameters: {
                  Id: values.orderId
               }
            })
         }
      };
      const res = await axios.get(DEV_URL + 'logistic/service/get', conf);
      if (res.status === 200 && res.data.result != null) {
         openNofi('success', 'Амжилттай', 'Амжилттай');
         setIsOpenOrderModal(true);
         setOrder(res.data.result);
         setPlaces([
            {
               latitude: res.data.result.receiverLocation.latitude,
               longitude: res.data.result.receiverLocation.longitude
            },
            {
               latitude: res.data.result.senderLocation.latitude,
               longitude: res.data.result.senderLocation.longitude
            },
            {
               latitude: res.data.result.travelLocation.latitude,
               longitude: res.data.result.travelLocation.longitude
            }
         ]);
         statusChecker(res.data.result.statusId);
      } else {
         openNofi('warning', 'Амжилттай', 'Амжилттай');
      }
      setIsLoading(false);
   };
   return (
      <div>
         <div className="slider-area">
            <div
               className="slider-height"
               style={{
                  display: 'flex',
                  alignItems: 'center'
               }}
            >
               <Container>
                  <div className="row">
                     <div className="col-xl-9 col-lg-9">
                        <div className="hero-caption">
                           <h1>
                              Аюулгүй, Найдвартай <span>Логистик</span> Шийдэл!
                           </h1>
                        </div>
                        <Form onFinish={searchOrder} className="search-box">
                           <Form.Item
                              className="input-form"
                              name="orderId"
                              rules={[
                                 {
                                    required: true,
                                    message: 'Заавал'
                                 },
                                 {
                                    pattern: new RegExp(/\d+/g),
                                    message: 'Зөвхөн тоо'
                                 }
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
                                 loading={isLoading}
                              >
                                 Харах
                              </Button>
                           </Form.Item>
                        </Form>
                     </div>
                  </div>
               </Container>
            </div>
         </div>
         <div className="our-info-area pt-[70px] pb-[40px]">
            <Container>
               <div
                  className="row"
                  style={{
                     alignItems: 'center'
                  }}
               >
                  <div className="col-lg-4 col-md-6 col-sm-6">
                     <div className="single-info mb-[30px]">
                        <div className="info-icon">
                           <img src={support} />
                        </div>
                        <div className="info-caption">
                           <p>Хэзээ ч бидэнтэй холбогдоорой</p>
                           <span>7015-7878 , 8999-7878</span>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                     <div className="single-info mb-[30px]">
                        <div className="info-icon">
                           <img src={clock} />
                        </div>
                        <div className="info-caption">
                           <p>Ням гаригт амарна</p>
                           <span>Даваа - Бямба 8.00 - 18.00</span>
                        </div>
                     </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-6">
                     <div className="single-info mb-[30px]">
                        <div className="info-icon">
                           <img src={address} />
                        </div>
                        <div className="info-caption">
                           <p>Монгол Улаанбаатар</p>
                           <span>
                              Чингэлтэй дүүрэг, 19-р хороо, 7-н буудлаас хойш
                              Зуслангийн чиглэлд 500м-т зам дагуу
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </Container>
         </div>
         <Modal
            title="Бараа харах"
            width={'80%'}
            open={isOpenOrderModal}
            onCancel={() => setIsOpenOrderModal(false)}
         >
            <div className="order-process">
               <div className="order-p-w">
                  <Spin
                     indicator={<LoadingOutlined style={{ fontSize: 24 }} />}
                     spinning={isLoading}
                     tip="Уншиж байна..."
                  >
                     <div className="d-google-map">
                        <Map
                           googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                           places={places}
                           loadingElement={<div style={{ height: `100%` }} />}
                           containerElement={<div style={{ height: '100%' }} />}
                           mapElement={<div style={{ height: `100%` }} />}
                           defaultCenter={{
                              lat: 47.918532422986054,
                              lng: 106.9176596467533
                           }}
                           defaultZoom={4}
                        />
                     </div>
                  </Spin>
                  <div className="order-p-info">
                     {/* <div className="order-p-i-header">
                        <div className="order-form">
                           <div className="el-input">
                              <Form form={form}>
                                 <Form.Item
                                    name="orderId"
                                    className="mb-0"
                                    rules={[
                                       {
                                          required: true,
                                          message: 'Заавал'
                                       }
                                    ]}
                                 >
                                    <Search
                                       placeholder="Захиалгын дугаар оруулна уу"
                                       enterButton="Хайх"
                                       size="large"
                                       onSearch={() =>
                                          form
                                             .validateFields()
                                             .then((values) =>
                                                searchOrder(values)
                                             )
                                       }
                                       style={{
                                          width: '100%'
                                       }}
                                    />
                                 </Form.Item>
                              </Form>
                           </div>
                        </div>
                     </div> */}
                     <div className="order-p-i-main">
                        <div className="order-pi-content">
                           <div className="order-main-close">
                              <span>X</span>
                           </div>
                           <div className="order-number">
                              Захиалгын дугаар:
                              <span>{order.id}</span>
                           </div>
                        </div>
                        <div className="order-pi-step">
                           <div
                              style={{
                                 margin: '10px',
                                 paddingBottom: '10px'
                              }}
                           >
                              <div className="wrapper">
                                 <ul className="StepProgress">
                                    {orderStatus.map((item) => {
                                       return (
                                          <div
                                             key={item.id}
                                             className={`StepProgress-item ${item.type}`}
                                          >
                                             <strong>{item.label}</strong>
                                          </div>
                                       );
                                    })}
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </Modal>
      </div>
   );
}
export default Home;
