import React, {useState} from "react";
import tree from '../Assets/pic1.png'
import './Register.css'
import {FcGoogle} from 'react-icons/fc'
import { useNavigate, Link } from "react-router-dom";

const Register = () =>{
    const navigate = useNavigate();
        const [username, setUsername ] = useState("");
        const [email, setEmail ] = useState("");
        const [pass, setPass ] = useState("");
        
        const handleSubmit = (e) =>{
            e.preventDefault();
            localStorage.setItem("username",username);
            localStorage.setItem("email",email);
            localStorage.setItem("pass",pass);
            navigate('/Login')
        }
        
    return(
        <section class="section-login">
            <div class="container-login text-center">
                <div class="login">
                    <form onSubmit={handleSubmit}>
                        <h1>Sign Up</h1>
                        <button type="submit" class="btn btn-outline-secondary btn-sm" id="login-google"><FcGoogle style={{paddingRight:'0.5rem'}} size={30}/>Sign Up With Google</button>
                    
                        <input type="emai" placeholder="Email" id="email"  required value={email} onChange={(e)=> setEmail(e.target.value
                                )}/>
                        <input type="text" placeholder="Username" id="username" required value={username} onChange={(e)=> setUsername(e.target.value)}/>
                        <input type="password" placeholder="Password" id="password" required value={pass} onChange={(e)=> setPass(e.target.value
                                )}/>
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