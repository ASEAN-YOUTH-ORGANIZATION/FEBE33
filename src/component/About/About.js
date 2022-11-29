import React, {useEffect} from "react";
import './About.css'
import globe from '../Assets/global.jpg'
import {MdVolunteerActivism} from 'react-icons/md'
import volunteer from '../Assets/volunteer.jpg'
import AOS from "aos";

function About(){
    useEffect(() => {
        AOS.init({duration: 2000})
    }, []);
    return(
        <div className="about">
            <section className="section bg-light border-bottom">
                <div className="container">
                    <h5 className="main-heading">Our Company</h5>
                    <br/> <hr/>
                    <img src={globe} class="img-fluid" alt="..."></img>
                    <p>
                        iGreen merupakan sebuah aplikasi website yang diperuntukan guna mencari para generasi muda yang peduli dan mencintai lingkungan sehingga kami memfokuskan pada kegiatan penghijauan ruang terbuka disekitar perkampungan warga yang kurang akan area hijau. Kami menamakan web ini dengan nama “iGreen”. Fitur utama web ini yaitu memberikan informasi hiring relawan selingkup ASEAN  kegiatannya bersifat offline. 
                    </p>
                </div>
            </section>

            <div className='services p-5' id='project'>
            <div className='myServiceText pt-5'>
                <h3>Our <span>Program</span></h3> <br />
                <hr />
            </div>
            <div className='container text-center mt-5'>
                <div className='row gx-2'>
                    <div className='col-12 col-md-6 col-lg-4  p-3 projects' data-aos="fade-right">
                        <div className='border px-4 py-5 project'>
                            <div className='row'>
                                <img src={volunteer}></img>
                            </div>
                            <div className='row'>
                            <p className='serviceIcon'><span className='border p-2'><MdVolunteerActivism/></span></p>
                            <h5 className='mt-4'>Volunteer</h5>
                            <p>Program Volunteer yang dimana program ini dapat membantu mengurangi dampak global warming</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        </div>
    )
}

export default About;