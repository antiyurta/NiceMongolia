import React, { useState } from 'react';
import '../style/home.css';
import {
   GoogleMap,
   Marker,
   withGoogleMap,
   withScriptjs
} from 'react-google-maps';
import icon from '../assets/header/marker.png';
import axios from 'axios';
import { Form, Input, Spin } from 'antd';
import { openNofi } from '../comman';
import { LoadingOutlined } from '@ant-design/icons';
import MapDirectionsRenderer from './MapDirection';
const DEV_URL = process.env.REACT_APP_DEV_URL;
const { Search } = Input;
function Home() {
   const [form] = Form.useForm();
   const [order, setOrder] = useState({});
   const [orderStatus, setOrderStatus] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [places, setPlaces] = useState([]);
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
                  <div className="order-p-i-header">
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
                                          .then((values) => searchOrder(values))
                                    }
                                    style={{
                                       width: '100%'
                                    }}
                                 />
                              </Form.Item>
                           </Form>
                        </div>
                     </div>
                  </div>
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
      </div>
   );
}
export default Home;
