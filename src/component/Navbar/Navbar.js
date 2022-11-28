import React from "react";
import './navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/offcanvas'
import 'bootstrap/js/dist/dropdown'
import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png'
import {IoMdNotificationsOutline} from 'react-icons/io'
import {FaUserCircle} from 'react-icons/fa'

const Navbar = () =>{
    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-transparent position-fixed w-100">
                <div class="container">
                    <a class="navbar-brand" href="#hero">
                        <img src={logo} alt="" width="100" class="d-inline-block "/>
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
    
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto mb-6 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link active" aria-current="page" to='/'>Home</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='/Relawan'>Relawan</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='/Kegiatan'>Kegiatan</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to='/AboutUs'>About Us</Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/notif' class="nav-link"><IoMdNotificationsOutline/></Link>
                            </li>
                            <li class="nav-item">
                                <Link to='/account' class="nav-link"><FaUserCircle/></Link>
                            </li>
                        </ul>
                        
                    </div>
    
    
                </div>
            </nav>
            </div>
    )
}

export default  Navbar;