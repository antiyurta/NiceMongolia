import React, { useState } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/header/NMongolia.png';
import facebook from '../assets/header/facebook.png';
import { Form, Input, Modal } from 'antd';
const DEV_URL = process.env.REACT_APP_DEV_URL;
import axios from 'axios';
import { openNofi } from '../comman';
import { useNavigate } from 'react-router-dom';
function Header() {
   const navigate = useNavigate();
   const [loginForm] = Form.useForm();
   const [loginLoading, setLoginLoading] = useState(false);
   const [isOpenLoginModal, setIsOpenLoginModal] = useState(false);
   const getLogin = async (values) => {
      setLoginLoading(true);
      const conf = {
         params: {
            body: JSON.stringify({
               Command: 'OnLogin',
               Parameters: values
            })
         }
      };
      const res = await axios.get(DEV_URL + 'logistic/service/get', conf);
      if (res.status === 200 && res.data.result != null) {
         setIsOpenLoginModal(false);
         openNofi('success', 'Амжилттай', 'Системд амжилттай нэвтэрлээ');
         navigate('/dashboard');
      } else {
         openNofi('error', 'Алдаа', 'Нэвтрэх нэр эсвэл нууц үг буруу');
      }
      setLoginLoading(false);
   };
   return (
      <>
         <div className="header-area">
            <div className="header-top hidden lg:block">
               <Container>
                  <div className="w-full">
                     <div className="flex justify-content-between align-items-center">
                        <div className="header-info-left">
                           <ul>
                              <li>Утас: 7015-7878 , 8999-7878</li>
                              <li>И-мэйл: noreply@yourdomain.com</li>
                           </ul>
                        </div>
                        <div className="header-info-right">
                           <ul className="header-social">
                              <li>
                                 <a>
                                    <img src={facebook} />
                                 </a>
                              </li>
                              <li>
                                 <a>
                                    <img src={facebook} />
                                 </a>
                              </li>
                              <li>
                                 <a>
                                    <img src={facebook} />
                                 </a>
                              </li>
                              <li>
                                 <a>
                                    <img src={facebook} />
                                 </a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
               </Container>
            </div>
            <div className="header-bottom">
               <Navbar bg="transparent" expand="lg" variant="dark" sticky="top">
                  <Container>
                     <Navbar.Brand href="#">
                        <img
                           src={logo}
                           style={{
                              height: '65px'
                           }}
                        />
                     </Navbar.Brand>
                     <Navbar.Toggle aria-controls="basic-navbar-nav" />
                     <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                           <Nav.Link href="#home">Нүүр</Nav.Link>
                           <Nav.Link href="#link">Тухай</Nav.Link>
                           <Nav.Link href="#link">Үйлчилгээ</Nav.Link>
                           <Nav.Link href="#link"> Холбоо барих</Nav.Link>
                        </Nav>
                        <div className="flex">
                           <Button
                              className="bg-[#0d6efd]"
                              variant="primary"
                              onClick={() => setIsOpenLoginModal(true)}
                           >
                              Нэвтрэх
                           </Button>
                        </div>
                     </Navbar.Collapse>
                  </Container>
               </Navbar>
            </div>
         </div>
         <Modal
            title="Нэтрэх хэсэг"
            open={isOpenLoginModal}
            onCancel={() => setIsOpenLoginModal(false)}
            onOk={() =>
               loginForm.validateFields().then((values) => getLogin(values))
            }
            confirmLoading={loginLoading}
            cancelText="Болих"
            okText="Нэвтрэх"
         >
            <Form
               form={loginForm}
               labelCol={{ span: 5 }}
               wrapperCol={{ span: 19 }}
            >
               <div className="pt-4">
                  <Form.Item label="Нэвтрэх нэр" name="Name">
                     <Input />
                  </Form.Item>
                  <Form.Item label="Нууц үг" name="Password">
                     <Input.Password />
                  </Form.Item>
               </div>
            </Form>
         </Modal>
      </>
   );
}
export default Header;
