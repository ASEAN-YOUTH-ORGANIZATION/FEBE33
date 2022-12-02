import axios from 'axios'
import {useParams} from 'react-router-dom'
import { useEffect, useState } from "react"
import './detailKegiatanStyle.css'

function DetailKegiatanStatus (){
    const {id} = useParams()
    const [showDetail, setShowDetail] = useState([])

    useEffect(() => {
        document.title = "Detail Relawan"
        axios.get(`https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/apiPenyimpananDataPendaftaran/${id}`)
        .then((result) => {
            setShowDetail(result.data)
        })
    }, [id])

    console.log(showDetail);

    return(
        <section class="section-jumbotron">
        <div className="container">
        <nav className="navbar navbar-light">
            <div className="container">
                <a href="/Kegiatan" className="navbar-brand mb-0 h1"><i className="fas fa-arrow-left"></i> Back</a>
            </div>
        </nav>

        <div className="detail container">
            <div className="detail-card card mt-4 mb-4">
                <img src={showDetail.gambar_event} alt="logo list volunteer" />
                <div className="detail-card-body card-body">
                    <h5 className="card-title">{showDetail.title}</h5>
                    <p className="card-text"><small className="text-muted">Alamat Kegiatan:</small></p>
                    <p className="card-text"><i className="fas fa-map-marked-alt"></i> {showDetail.address}</p>
                    <p className="card-text"><small className="text-muted">Periode Kegiatan:</small></p>
                    <p className="card-text"><i className="far fa-clock"></i> {showDetail.periode_event}</p>
                    <p className="detail-card-style card-text">Rincian Kegiatan: </p>
                    <p className="card-text">{showDetail.detail_aktivitas}</p>
                    <p className="detail-card-style card-style card-text" >Kriteria Relawan: </p>
                    <p className=" card-text">{showDetail.volunteer_requirment}</p>
                </div>
            </div>
        </div>
        

        {/* <nav className="detail-nav navbar navbar-light">
            <div className="container justify-content-end">
                <input type="button" className="btn" value="Daftar"/>
            </div>
        </nav> */}
        </div>
        </section>
    )
}

export default DetailKegiatanStatus