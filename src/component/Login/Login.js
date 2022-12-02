import React, {useState} from "react";
import tree from '../Assets/pic1.png'
import './Login.css'
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const navigate = useNavigate()
    const [email, setEmail ] = useState("");
    const [errorEmail,setErrorEmail] = useState('');
    const [pass, setPass ] = useState("");
    const [errorPass, setErrorPass] = useState('');
    const [error, setError] = useState('');
    const [errors, setErrors] = useState(false);
    const userPass = localStorage.getItem("pass");
    const userEmail = localStorage.getItem("email");

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
        if(email === userEmail && pass === userPass){
            navigate('/Home')
            
            
        } else if(email == 0 || pass == 0){
            setErrors(true)
        }
        else{
            navigate('/Login')
            alert("wrong")
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
                <div class="login">
                    <form action="" onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <button type="submit" class="btn btn-outline-secondary btn-sm" id="login-google"><FcGoogle style={{paddingRight:'0.5rem'}} size={30}/>Login With Google</button>
                        <p>Enter your Email and Password</p>
                        <input type="emai" placeholder="Email" id="email"  required value={email} onChange={onChangeEmail}/>
                        {
                                                        errorEmail && (
                                                            <p className="text-danger">{errorEmail}</p>
                                                        )
                                                    }
                         {errors && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) ? <p id='massage'>Format Email: abc@gmail.com</p> :"" }
                        
                         <input type="password" placeholder="Password" id="password" required value={pass} onChange={onChangePassword}/>
                        {
                                                        errorPass && (
                                                            <p className="text-danger">{errorPass}</p>
                                                        )
                                                    }
                        
                        <p class="forgot-pass">
                            <a href="#">Forgot Password?</a>
                        </p>
                        <button id="sign-in-btn" type="submit">Login</button>
                        <p>
                            Don't have any account?<a href="../Register/register.html" id="sign-up-form">Sign Up</a> here!
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

export default Login;