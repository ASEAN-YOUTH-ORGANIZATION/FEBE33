import axios from 'axios'
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import './formStyle.css'

function Form() {
    const {id} = useParams()
    const [idCard, setIdCard] = useState("")
    const [cv, setCv] = useState("")
    const [studentCard, setStudentCard] = useState("")
    const [healthLetter, setHealthLetter] = useState("")
    const [noHp, setNoHp] = useState("")
    const [emaill, setEmaill] = useState("")
    const [reasonn, setReasonn] = useState("")
    const [dataa, setDataa] = useState([])

    useEffect(() => {
        document.title = "Daftar"

        axios.get(`https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/apiPendaftaranVolunteer/${id}`)
        .then ((result) => {
            setDataa(result.data)
        })
    },[id])

    const handleSubmit = (e) => {
        e.preventDefault()

        const link = axios.post("https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/apiPenyimpananDataPendaftaran", {
            nomor_telepon: noHp,
            link_cv: cv,
            link_studentCard: studentCard,
            link_HealthLetter: healthLetter,
            email: emaill,
            reason: reasonn,
            link_IDCard: idCard,
            status: "being processed",
            name_event: dataa.title,
            periode_event: dataa.periode,
            gambar_event: dataa.gambar,
            detail_aktivitas: dataa.detail_activities,
            address: dataa.address,
            id_event: dataa.id
        })
        alert("Data Berhasil disimpan")
    }

    return(
        <section className="section-jumbotron">
        <div className="container">
        <nav className="navbar navbar-light">
            <div className="container">
                <a href="/Relawan" className="navbar-brand mb-0 h1"><i className="fas fa-arrow-left"></i> Back</a>
            </div>
        </nav>

        <div className="form-daftar container">
            <div className="form-card card mt-4 mb-4">
                <form className="form-card-body card-body" id="form-daftar" onSubmit={handleSubmit}>
                    <label htmlFor="id-card" className="form-label">Enter your ID Card (.pdf)<span className="required">*</span></label>
                    <input type="text" className="form-control" placeholder="Link file" id="id-card" required value={idCard} onChange={(e) => setIdCard(e.target.value)}/>

                    <label htmlFor="cv" className="form-label">Enter your CV (.pdf)<span className="required">*</span></label>
                    <input type="text" className="form-control" placeholder="Link file" id="cv" required value={cv} onChange={(e) => setCv(e.target.value)}/>
                    
                    <label htmlFor="student-card" className="form-label">If you are student, you can enter a student ID Card (.pdf)<span className="required">*</span></label>
                    <input type="text" className="form-control" placeholder="Link file" id="student-card" required value={studentCard} onChange={(e) => setStudentCard(e.target.value)}/>

                    <label htmlFor="health-letter" className="form-label">A health leter from a doctor (.pdf)<span className="required">*</span></label>
                    <input type="text" className="form-control" placeholder="Link file" id="health-letter" required value={healthLetter} onChange={(e) => setHealthLetter(e.target.value)}/>
                    
                    <label className="form-label">Enter your mobile number and email address to make it easier for the organization to contact you<span className="required">*</span></label>
                    <div className="form-group input-group flex-nowrap">
                        <input type="text" className="form-control" placeholder="+62 xxxx xxxx xx" id="number-phone" required value={noHp} onChange={(e) => setNoHp(e.target.value)}/>
                        <input type="text" className="form-control" placeholder="email" id="email" required value={emaill} onChange={(e) => setEmaill(e.target.value)}/>
                    </div>

                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Why are you interested in volunteering for this activity?<span className="required">*</span></label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required value={reasonn} onChange={(e) => setReasonn(e.target.value)}></textarea>
                    
                    <button type="submit" className="btn">Send <i className="fas fa-arrow-right"></i></button>
                </form>
            </div>
        </div>
        
        </div>
        </section>
    )
}

export default Form