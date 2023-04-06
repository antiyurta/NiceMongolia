import React, { useState } from 'react';
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap';
import logo from '../assets/header/logo.png';
import facebook from '../assets/header/facebook.png';
function Header() {
   return (
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
                     <Form className="flex">
                        <Button className="bg-[#0d6efd]" variant="primary">
                           Нэвтрэх
                        </Button>
                     </Form>
                  </Navbar.Collapse>
               </Container>
            </Navbar>
         </div>
      </div>
   );
}
export default Header;
