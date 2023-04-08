import { Button, Card, Form, Input, Modal, Select, Table } from 'antd';
import { GlobalOutlined } from '@ant-design/icons';
import axios from 'axios';
import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';
import {
   GoogleMap,
   Marker,
   withGoogleMap,
   withScriptjs
} from 'react-google-maps';
const DEV_URL = process.env.REACT_APP_DEV_URL;
const { Option } = Select;
function Cargo() {
   const [changeForm] = Form.useForm();
   const [lists, setLists] = useState([]);
   const [loading, setLoading] = useState(false);
   const [isOpenChangeModal, setIsOpenChangeModal] = useState(false);
   const [statuses, setStatuses] = useState([]);
   const [pointerPos, setPointerPos] = useState({});
   const [places, setPlaces] = useState([]);
   const getCargoLists = async () => {
      setLoading(true);
      const conf = {
         params: {
            body: JSON.stringify({
               Command: 'GetCargos',
               Parameters: {}
            })
         }
      };
      const res = await axios.get(DEV_URL + 'logistic/service/get', conf);
      if (res.status === 200 && res.data.result != null) {
         setLists(res.data.result);
      }
      setLoading(false);
   };
   const getStatuses = async () => {
      const conf = {
         params: {
            body: JSON.stringify({
               Command: 'GetStatuses',
               Parameters: {}
            })
         }
      };
      const res = await axios.get(DEV_URL + 'logistic/service/get', conf);
      if (res.status === 200 && res.data.result != null) {
         setStatuses(res.data.result);
      }
   };
   const columns = [
      {
         title: 'Дугаар',
         dataIndex: 'id'
      },
      {
         title: 'Чиглэл',
         dataIndex: 'directionName'
      },
      {
         title: 'Илгээгчийн нэр',
         dataIndex: 'senderName'
      },
      {
         title: 'Илгээгчийн утас',
         dataIndex: 'senderPhone'
      },
      {
         title: 'Хүлээн авагчийн нэр',
         dataIndex: 'receiverName'
      },
      {
         title: 'Хүлээн авагчийн утас',
         dataIndex: 'receiverPhone'
      },
      {
         title: 'Тоо ширхэг',
         dataIndex: 'quantity'
      },
      {
         title: 'Жин',
         dataIndex: 'weightValue'
      },
      {
         title: 'Нэгж',
         dataIndex: 'weightUnitName'
      },
      {
         title: 'Үнэ',
         dataIndex: 'priceValue'
      },
      {
         title: 'Нэгж',
         dataIndex: 'priceUnitName'
      },
      {
         title: 'Төлбөрийн төрөл',
         dataIndex: 'payModeName'
      },
      {
         title: 'Төлбөрийн хэлбэр',
         dataIndex: 'payTypeName'
      },
      {
         title: 'Төлөв',
         dataIndex: 'statusName'
      },
      {
         title: 'Үүсгэсэн огноо',
         dataIndex: 'createdDate',
         render: (text) => {
            return moment(text).format('YYYY-MM-DD HH:mm');
         }
      },
      {
         title: 'Үйлдэл',
         render: (_, row) => {
            return (
               <Button
                  type="link"
                  onClick={() => {
                     getStatuses();
                     setIsOpenChangeModal(true);
                     setPlaces([
                        {
                           latitude: row.receiverLocation.latitude,
                           longitude: row.receiverLocation.longitude
                        },
                        {
                           latitude: row.senderLocation.latitude,
                           longitude: row.senderLocation.longitude
                        }
                     ]);
                     setPointerPos({
                        latitude: row.travelLocation.latitude,
                        longitude: row.travelLocation.longitude
                     });
                  }}
                  icon={<GlobalOutlined />}
               />
            );
         }
      }
   ];
   const Map = withScriptjs(
      withGoogleMap((props) => (
         <GoogleMap
            onClick={(ev) => {
               console.log('latitide = ', ev.latLng.lat());
               console.log('longitude = ', ev.latLng.lng());
               // addPlace(ev.latLng.lat(), ev.latLng.lng());
               setPointerPos({
                  lat: ev.latLng.lat(),
                  lng: ev.latLng.lng()
               });
            }}
            defaultCenter={props.defaultCenter}
            defaultZoom={props.defaultZoom}
         >
            <>
               {props.places.map((marker, index) => {
                  const position = {
                     lat: parseFloat(marker.latitude),
                     lng: parseFloat(marker.longitude)
                  };
                  return <Marker key={index} position={position} />;
               })}
               <Marker position={props.pointerPos} />
            </>
         </GoogleMap>
      ))
   );
   useEffect(() => {
      console.log(pointerPos);
      changeForm.setFieldsValue({
         latitide: pointerPos.lat,
         longitude: pointerPos.lng
      });
   }, [pointerPos]);
   useEffect(() => {
      getCargoLists();
   }, []);
   return (
      <>
         <Card
            title="Ачаа жагсаалт"
            bordered={false}
            className="header-solid max-h-max rounded-md"
         >
            <div className="flex flex-wrap">
               <div className="w-full py-1">
                  <div className="float-left">
                     <Button
                        type="primary"
                        onClick={() => getCargoLists()}
                        loading={loading}
                     >
                        Сэргээх
                     </Button>
                  </div>
               </div>
            </div>
            <Table
               rowKey={'id'}
               bordered
               loading={loading}
               columns={columns}
               dataSource={lists}
               pagination={false}
            />
         </Card>
         <Modal
            forceRender={true}
            title="Төлөв солих"
            open={isOpenChangeModal}
            onCancel={() => setIsOpenChangeModal(false)}
         >
            <Form layout="vertical" form={changeForm}>
               <div className="flex flex-wrap">
                  <div className="w-full p-1">
                     <Form.Item label="Төлөв" name="statuses">
                        <Select>
                           {statuses?.map((status, index) => {
                              return (
                                 <Option key={index} value={status.id}>
                                    {status.name}
                                 </Option>
                              );
                           })}
                        </Select>
                     </Form.Item>
                  </div>
                  <div className="w-1/2 p-1">
                     <Form.Item label="latitide" name="latitide">
                        <Input />
                     </Form.Item>
                  </div>
                  <div className="w-1/2 p-1">
                     <Form.Item label="longitude" name="longitude">
                        <Input />
                     </Form.Item>
                  </div>
               </div>
            </Form>
            <div
               style={{
                  width: '100%',
                  height: '500px'
               }}
            >
               <Map
                  googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
                  places={places}
                  pointerPos={pointerPos}
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
         </Modal>
      </>
   );
}
export default Cargo;
