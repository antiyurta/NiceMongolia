import React from 'react';
import '../style/footer.css';
import logo from '../assets/header/logo.png';
import { Container } from 'react-bootstrap';
function Footer() {
   return (
      <div className="footer-area footer-bg">
         <Container>
            <div className="footer-top footer-padding">
               <div className="footer-heading">
                  <div className="row justify-between">
                     <div className="col-xl-6 col-lg-8 col-md-8">
                        <div className="wantToWork-caption wantToWork-caption2">
                           <h2>
                              We Understand The Importance Approaching Each
                              Work!
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
               <div className="row flex justify-between">
                  <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                     <div className="single-footer-caption mb-[50px]">
                        <div className="footer-tittle">
                           <h4>COMPANY</h4>
                           <ul>
                              <li>
                                 <a>Тухай</a>
                              </li>
                           </ul>
                           <ul>
                              <li>
                                 <a>Тухай</a>
                              </li>
                           </ul>
                           <ul>
                              <li>
                                 <a>Тухай</a>
                              </li>
                           </ul>
                           <ul>
                              <li>
                                 <a>Тухай</a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                     <div className="single-footer-caption mb-[50px]">
                        <div className="footer-tittle">
                           <h4>COMPANY</h4>
                           <ul>
                              <li>
                                 <a>Тухай</a>
                              </li>
                           </ul>
                           <ul>
                              <li>
                                 <a>Тухай</a>
                              </li>
                           </ul>
                           <ul>
                              <li>
                                 <a>Тухай</a>
                              </li>
                           </ul>
                           <ul>
                              <li>
                                 <a>Тухай</a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                     <div className="single-footer-caption mb-[50px]">
                        <div className="footer-tittle">
                           <h4>COMPANY</h4>
                           <ul>
                              <li>
                                 <a>Тухай</a>
                              </li>
                           </ul>
                           <ul>
                              <li>
                                 <a>Тухай</a>
                              </li>
                           </ul>
                           <ul>
                              <li>
                                 <a>Тухай</a>
                              </li>
                           </ul>
                           <ul>
                              <li>
                                 <a>Тухай</a>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-2 col-lg-2 col-md-4 col-sm-6">
                     <div className="single-footer-caption mb-[50px]">
                        <div className="footer-logo">
                           <a>
                              <img src={logo} />
                           </a>
                        </div>
                        <div className="footer-tittle">
                           <div className="footer-pera">
                              <p className="info1">
                                 GThe trade war currently ensuing between te US
                                 anfd several natxions around thdhe globe, most
                                 fiercely with.
                              </p>
                           </div>
                        </div>
                        <div className="footer-social">
                           <a>
                              <i></i>
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="footer-bottom">
               <div className="row flex items-center">
                  <div className="col-lg-12">
                     <div className="footer-copy-right text-center">
                        <p>Copyright © 2023 All rights reserved</p>
                     </div>
                  </div>
               </div>
            </div>
         </Container>
      </div>
   );
}
export default Footer;
