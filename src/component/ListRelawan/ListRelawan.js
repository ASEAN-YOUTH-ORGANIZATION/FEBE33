import {useNavigate} from "react-router-dom"
import axios from 'axios'
import { useEffect, useState } from "react"
import '../StatusKegiatan/statusKegiatanStyle.css'
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

function ListRelawan() {
    const [show, setShow] = useState([])
    const navigation = useNavigate()

    useEffect(() => {
        document.title = "Relawan"
        axios.get("https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/apiPendaftaranVolunteer")
        .then((result) => {
            setShow(result.data)
        })
    }, [])

    function handleDetail(id) {
        navigation(`/detail-relawan/${id}`)
    }

    return(
        <>
        <Navbar/>
        <br/>
            <div className="container kegiatan">
            <div className="kegiatan-row row row-cols-1 row-cols-md-4 g-4 mt-5 mb-5">
                {show.map((item, index) => {
                    return(
                        <div className="kegiatan-col col" key={item.id}>
                            <div className="kegiatan-card card">
                                <img src= {item.gambar} alt="list foto 1" className="card-img-top"/>
                                <div className="kegiatan-card-body card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text"><i className="far fa-clock"></i> {item.periode}</p>
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

export default ListRelawan