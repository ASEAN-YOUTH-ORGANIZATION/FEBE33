import React, {useState} from "react";
import tree from '../Assets/pic1.png'
import './Login.css'
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Login = () =>{
    const navigate = useNavigate()
    const [username, setUsername ] = useState("");
    const [errorUsername,setErrorUsername] = useState('');
    const [pass, setPass ] = useState("");
    const [errorPass, setErrorPass] = useState('');
    const [error, setError] = useState('');
    const [errors, setErrors] = useState(false);
    const userPass = localStorage.getItem("pass");
    const userUsername = localStorage.getItem("username");

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
        if(username === userUsername && pass === userPass){
            navigate('/Home')
            
            
        } else if(username == 0 || pass == 0){
            setErrors(true)
        }
        else{
            navigate('/Login')
            alert("wrong")
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
                <div class="login">
                    <form action="" onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <button type="submit" class="btn btn-outline-secondary btn-sm" id="login-google"><FcGoogle style={{paddingRight:'0.5rem'}} size={30}/>Login With Google</button>
                        <p>Enter your Username and Password</p>
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
        <Footer/>
        </>
    )
}

export default Login;