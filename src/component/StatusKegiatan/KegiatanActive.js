import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { useEffect, useState } from "react"
import axios from 'axios'
import {useNavigate} from "react-router-dom"
import './statusKegiatanStyle.css'

function KegiatanActive() {
    const navigation = useNavigate()
    const [show, setShow] = useState([])
    const [findActive, setFindActive] = useState("accepted")

    useEffect(() => {
        console.log(findActive);
        axios.get("https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/apiPenyimpananDataPendaftaran")
        .then((result) => {
            let resultFix = result.data

            let resultFilter = resultFix.filter((item) => 
                item.status.includes(findActive)
            )

            setShow(resultFilter)
        })
    }, [findActive])

    function handleDetail(id) {
        navigation(`/detail-kegiatan/${id}`)
    }

    return(
        <>
        <Navbar/>
        <br />
        <br/>
        <div className="kegiatan container">
            <header className="header mt-5">
                <h4>My Activities</h4>
                <div className="sub-nav d-flex text-decoration-none">
                    <a className="button-active" href='/kegiatan-active'>Active Activities</a>
                    <a className="button-regis" href='/Kegiatan'>Registration Status</a>
                </div>
            </header>

            <div className="kegiatan-row row row-cols-1 row-cols-md-4 g-4 mt-3 mb-5">
                {show.map((item, index) => {
                    return(
                        <div className="kegiatan-col col" key={item.id}>
                            <div className="kegiatan-card card">
                                <img src= {item.gambar_event} alt="list foto 1" className="card-img-top"/>
                                <a href="#" className="kegiatan-badge btn badge bg-success">{item.status}</a>
                                <div className="kegiatan-card-body card-body">
                                    <h5 className="card-title">{item.name_event}</h5>
                                    <p className="card-text"><i className="far fa-clock"></i> {item.periode_event}</p>
                                    <button  className="btn" onClick={() => handleDetail(item.id)}>Go Detail <i className="fas fa-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                    )
                })}
                
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default KegiatanActive