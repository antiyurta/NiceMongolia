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
   const [isOpenChangeModal, setIsOpenChangeModal] = useState(false);
   const [statuses, setStatuses] = useState([]);
   const [pointerPos, setPointerPos] = useState({});
   const getCargoLists = async () => {
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
         render: () => {
            return (
               <Button
                  type="link"
                  onClick={() => {
                     getStatuses();
                     setIsOpenChangeModal(true);
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
               setPointerPos({
                  latitude: ev.latLng.lat(),
                  longitude: ev.latLng.lng()
               });
            }}
            defaultCenter={props.defaultCenter}
            defaultZoom={props.defaultZoom}
         >
            <Marker
               position={{
                  lat: parseFloat(props.places.latitude),
                  lng: parseFloat(props.places.longitude)
               }}
            />
         </GoogleMap>
      ))
   );
   useEffect(() => {
      changeForm.setFieldsValue({
         latitide: pointerPos.latitude,
         longitude: pointerPos.longitude
      });
      //   changeForm.setFieldValue('latitide', pointerPos.latitude);
      //   changeForm.setFieldValue('longitude', pointerPos.longitude);
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
            <Table
               rowKey={'id'}
               bordered
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
                  places={pointerPos}
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
