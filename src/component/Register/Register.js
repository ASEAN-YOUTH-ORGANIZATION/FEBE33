import React, {useState} from "react";
import tree from '../Assets/pic1.png'
import './Register.css'
import {FcGoogle} from 'react-icons/fc'
import { useNavigate, Link } from "react-router-dom";

const Register = () =>{
    const navigate = useNavigate();
    const [username, setUsername ] = useState("");
    const [errorUsername, setErrorUsername ] = useState("");
    const [email, setEmail ] = useState("");
    const [errorEmail,setErrorEmail] = useState('');
    const [pass, setPass ] = useState("");
    const [errorPass, setErrorPass] = useState('');
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
        
        const handleSubmit = (e) =>{
            e.preventDefault();
            if(username.length==0 || email.length==0 || pass.length==0 ){
                setError(true)
            }
            else if(!/\S+@\S+\.\S+/.test(email)){
                setErrors(true)
            }
            else{
                navigate("/Login")
                localStorage.setItem("username",username);
                localStorage.setItem("email",email);
                localStorage.setItem("pass",pass);
            }
        }
        
    return(
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
                        
                        
                        <input type="text" placeholder="Username" id="username" required value={username} onChange={onChangeUsername}/>
                        {
                                                        errorUsername && (
                                                            <p className="text-danger">{errorUsername}</p>
                                                        )
                                                    }
                        <input type="password" placeholder="Password" id="password" required value={pass} onChange={onChangePassword}/>
                        {
                                                        errorPass && (
                                                            <p className="text-danger">{errorPass}</p>
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
    )
}

export default Register;