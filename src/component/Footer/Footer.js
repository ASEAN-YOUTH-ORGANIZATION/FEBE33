import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/offcanvas'
import 'bootstrap/js/dist/dropdown'
import './Footer.css'
import {FaInstagram, FaFacebook, FaWhatsapp} from 'react-icons/fa'
import { Container, Row, Col } from "react-bootstrap";
import logo from '../Assets/logo.png'
import asean from '../Assets/asean.png'


const Footer = () =>{
    return(
        <footer className='footer'>
        <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" className="logo"/>
            <div className="social-icon">
                <a href="https://www.instagram.com"><FaInstagram style={{color:'#C7D36F'}} size={25}/></a>
                <a href="https://www.facebook.com"><FaFacebook style={{color:'#C7D36F' }} size={25}/></a>
                <a href="#"><FaWhatsapp style={{color:'#C7D36F' }} size={25}/></a>
            </div>
          
          </Col>
          <Col size={12} md={6} lg={4}>
              <div class="fitur">
                <h1 >iGreen</h1>
                <a href="#">Home</a>
                <a href="#">Relawan</a>
                <a href="#">Kegiatan</a>
                <a href="#">About Us</a>
                <a href="#">Bantuan</a>
              </div>
          </Col>
          <Col size={12} md={2} lg={2}>
              <div class="wrapper-col-4">
                <h1>Challenge Partner Kami</h1>
                <img src={asean} alt=""/>
              </div>
          </Col>
            
          
        </Row>
        <div className='wrapper-last-footer d-flex justify-content-between'>
            <div class="copyright">@2022 - iGreen - Asean Youth Organization</div>
        </div>
      </Container>
      </footer>
    )
}

export default Footer;