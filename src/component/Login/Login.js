import React, {useState} from "react";
import tree from '../Assets/pic1.png'
import './Login.css'
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const navigate = useNavigate()
    const [pass, setPass] = useState("")
    const [email, setEmail] = useState("")
    const userPass = localStorage.getItem("pass")
    const userEmail = localStorage.getItem("email")

    const handleSubmit = (e) =>{
        e.preventDefault();
        if(email === userEmail && pass === userPass){
            navigate('/Home')
            
            
        }
        else{
            navigate('/Login')
            alert("wrong")
        }
    }
    
    return(
        <section class="section-login">
            <div class="container-login text-center">
                <div class="login">
                    <form action="" onSubmit={handleSubmit}>
                        <h1>Login</h1>
                        <button type="submit" class="btn btn-outline-secondary btn-sm" id="login-google"><FcGoogle style={{paddingRight:'0.5rem'}} size={30}/>Login With Google</button>
                        <p>Enter your Email and Password</p>
                        <input type="email" placeholder="Email" id="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                        <input type="password" placeholder="Password" id="password" value={pass} onChange={(e)=> setPass(e.target.value)}/>
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