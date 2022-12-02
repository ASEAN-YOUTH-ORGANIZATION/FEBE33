import axios from 'axios'
import { useEffect, useState } from "react"
import {useParams, useNavigate} from 'react-router-dom'
import './detailKegiatanStyle.css'

function DetailKegiatanList (){
    const {id} = useParams()
    const [showDetail, setShowDetail] = useState([])
    const navigation = useNavigate()

    useEffect(() => {
        document.title = "Detail Relawan"
        axios.get(`https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/apiPendaftaranVolunteer/${id}`)
        .then((result) => {
            setShowDetail(result.data)
        })
    }, [id])

    function handleDaftar(id) {
        navigation(`/daftar/${id}`)
    }
    return(
        <>
        <div className="container">
        <nav className="navbar navbar-light">
            <div className="container">
                <a href="/Relawan" className="navbar-brand mb-0 h1"><i className="fas fa-arrow-left"></i> Back</a>
            </div>
        </nav>

        <div className="detail container">
            <div className="detail-card card mt-4 mb-4">
                <img src={showDetail.gambar} alt="logo list volunteer" />
                <div className="detail-card-body card-body">
                    <h5 className="card-title">{showDetail.title}</h5>
                    <p className="card-text"><small className="text-muted">Alamat Kegiatan:</small></p>
                    <p className="card-text"><i className="fas fa-map-marked-alt"></i> {showDetail.address}</p>
                    <p className="card-text"><small className="text-muted">Periode Kegiatan:</small></p>
                    <p className="card-text"><i className="far fa-clock"></i> {showDetail.periode}</p>
                    <p className="detail-card-style card-text">Rincian Kegiatan: </p>
                    <p className="card-text">{showDetail.detail_activities}</p>
                    <p className="detail-card-style card-style card-text" >Kriteria Relawan: </p>
                    <p className=" card-text">{showDetail.volunteer_requirement}</p>
                </div>
            </div>
        </div>
        

        <nav className="detail-nav navbar navbar-light">
            <div className="container justify-content-end">
                <input type="button" className="btn" onClick={() => handleDaftar(showDetail.id)} value="Daftar"/>
            </div>
        </nav>
    </div>
    </>
    )
}

export default DetailKegiatanList