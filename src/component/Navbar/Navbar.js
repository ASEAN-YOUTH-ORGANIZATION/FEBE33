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
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent position-fixed w-100">
                <div className="container">
                    <a className="navbar-brand" href="#hero">
                        <img src={logo} alt="" width="100" className="d-inline-block "/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-6 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Relawan'>Relawan</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Kegiatan'>Kegiatan</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/About'>About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/notif' className="nav-link"><IoMdNotificationsOutline/></Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/account' className="nav-link"><FaUserCircle/></Link>
                            </li>
                        </ul>
                        
                    </div>
    
    
                </div>
            </nav>
            </div>
    )
}

export default  Navbar;