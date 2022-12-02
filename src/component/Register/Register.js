import React, {useState} from "react";
import tree from '../Assets/pic1.png'
import './Register.css'
import {FcGoogle} from 'react-icons/fc'
import { useNavigate, Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Register = () =>{
    const navigate = useNavigate();
    const [username, setUsername ] = useState("");
    const [errorUsername, setErrorUsername ] = useState("");
    const [nama, setNama ] = useState("");
    const [errorNama, setErrorNama ] = useState("");
    const [email, setEmail ] = useState("");
    const [errorEmail,setErrorEmail] = useState('');
    const [noHp, setNoHp ] = useState("");
    const [errorNoHp,setErrorNoHp] = useState('');
    const [kelamin, setKelamin ] = useState("");
    const [errorKelamin,setErrorKelamin] = useState('');
    const [pass, setPass ] = useState("");
    const [errorPass, setErrorPass] = useState('');
    const [confirmPass, setConfirmPass ] = useState("");
    const [errorConfirmPass, setErrorConfirmPass] = useState('');
    const [error, setError] = useState('');
    const[alert,setAlert] = useState('');
    const [errors, setErrors] = useState(false)


    const onChangeUsername = (e) =>{
        const value = e.target.value
        setUsername(value)
        setError('')
        if(!value){
            setErrorUsername('Username Tidak Boleh Kosong')
        } else{
            setErrorUsername('')
        }
    }
    const onChangeNama = (e) =>{
        const value = e.target.value
        setNama(value)
        setError('')
        if(!value){
            setErrorNama('Nama Tidak Boleh Kosong')
        } else{
            setErrorNama('')
        }
    }
    const onChangeEmail =(e) =>{
        const value = e.target.value
        setEmail(value)
        setError('')
        if(!value){
            setErrorEmail('Email tidak boleh kosong')
        } else{
            setErrorEmail('')
        }
    }
    const onChangeNoHp = (e) =>{
        const value = e.target.value
        setNoHp(value)
        setError('')
        if(!value){
            setErrorNoHp('No Hp Tidak Boleh Kosong')
        } else{
            setErrorNoHp('')
        }
    }
    const onChangeKelamin = (e) =>{
        const value = e.target.value
        setKelamin(value)
        setError('')
        if(!value){
            setErrorKelamin('Jenis Kelamin Tidak Boleh Kosong')
        } else{
            setErrorKelamin('')
        }
    }
    const onChangePassword = (e) =>{
        const value = e.target.value
        setPass(value)
        setError('')
        if(!value){
            setErrorPass('Password tidak boleh kosong')
        } else{
            setErrorPass('')
        }
    }
    const onChangeConfirmPassword = (e) =>{
        const value = e.target.value
        setConfirmPass(value)
        setError('')
        if(value !== pass){
            setErrorConfirmPass('Password tidak sama dengan password yang telah dimasukan sebelumnya')
        } else if(!value) {
            setErrorConfirmPass('Password tidak boleh kosong')
        }else{
            setErrorConfirmPass('')
        }
    }
        
        const handleSubmit = (e) =>{
            e.preventDefault();
            if(username.length==0 || nama.length==0 || email.length==0 || noHp.length==0 || kelamin.length==0 || pass.length==0 || confirmPass.length==0 ){
                setError(true)
            }
            else if(!/\S+@\S+\.\S+/.test(email)){
                setErrors(true)
            }
            else{
                navigate("/Login")
                localStorage.setItem("username",username);
                localStorage.setItem("nama", nama);
                localStorage.setItem("email",email);
                localStorage.setItem("noHp", noHp);
                localStorage.setItem("kelamin", kelamin);
                localStorage.setItem("pass",pass);
                localStorage.setItem("confirmPass", confirmPass)
            }
        }
        
    return(
        <>
        <Navbar/>
        <section class="section-login">
            <div class="container-login text-center">
                {
                    error && (
                        <div className='alert alert-danger'>
                            <p>{error}</p>
                        </div>
                    )
                }
                {
                    alert && (
                        <div className='alert alert-primary'>
                            <p>{alert}</p>
                        </div>
                    )
                }
                <div class="login">
                    <form onSubmit={handleSubmit}>
                        <h1>Sign Up</h1>
                        <button type="submit" class="btn btn-outline-secondary btn-sm" id="login-google"><FcGoogle style={{paddingRight:'0.5rem'}} size={30}/>Sign Up With Google</button>
                    
                        <input type="emai" placeholder="Email" id="email"  required value={email} onChange={onChangeEmail}/>
                        {
                                                        errorEmail && (
                                                            <p className="text-danger">{errorEmail}</p>
                                                        )
                                                    }
                         {errors && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) ? <p id='massage'>Format Email: abc@gmail.com</p> :"" }
                        
                        
                        <input type="text" id="nama" name="nama" placeholder="Nama"  value={nama} onChange={onChangeNama}/>
                        {
                                                        errorNama && (
                                                            <p className="text-danger">{errorNama}</p>
                                                        )
                                                    }
                        <input type="text" placeholder="Username" id="username" required value={username} onChange={onChangeUsername}/>
                        {
                                                        errorUsername && (
                                                            <p className="text-danger">{errorUsername}</p>
                                                        )
                                                    }
                        <input type="text"  id="noHp" name="noHp" placeholder="Nomor HP"  value={noHp} onChange={onChangeNoHp}/>
                        {
                                                        errorNoHp && (
                                                            <p className="text-danger">{errorNoHp}</p>
                                                        )
                                                    }
                        <select  id="kelamin" name="kelamin"  value={kelamin} onChange={onChangeKelamin}>
                                <option selected>Pilih Jenis Kelamin</option>
                                <option value="Laki">Laki - Laki</option>
                                <option value="Perempuan">Perempuan</option>
                        </select>
                        {
                                                        errorKelamin && (
                                                            <p className="text-danger">{errorKelamin}</p>
                                                        )
                                                    }
                        <input type="password" placeholder="Password" id="password" required value={pass} onChange={onChangePassword}/>
                        {
                                                        errorPass && (
                                                            <p className="text-danger">{errorPass}</p>
                                                        )
                                                    }
                        <input type="password" placeholder="Confirm Password" id="confirmPass" required value={confirmPass} onChange={onChangeConfirmPassword}/>
                        {
                                                        errorConfirmPass && (
                                                            <p className="text-danger">{errorConfirmPass}</p>
                                                        )
                                                    }
                        <button id="sign-up-btn" type="submit" >Sign Up</button>
                        <p>
                            Already have account?<Link to="/Login">Log In</Link> here!
                        </p>
                    </form>
                </div>
                <div class="right">
                    <img src={tree} alt=""/>
                </div>
            </div>
        </section>
        <Footer/>
        </>
    )
}

export default Register;