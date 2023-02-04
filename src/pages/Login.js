import { Link, useNavigate} from "react-router-dom";
import {signInWithEmailAndPassword} from "firebase/auth";
import { useState } from "react";
import {auth} from '../firebase-config'

export const Login = () => {

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");


    let navigate=useNavigate();
    const login = async () => {
        try{
            const user=await signInWithEmailAndPassword(auth,email,password);
            console.log(user);
            alert("Logged in successfully");
            navigate('/');
        }
        catch (error) {
            alert(error.message + "\nFailed, Try again");
        }
        
    };
    return (
        <div className="outline">
            <h4>LOGIN</h4>
            <input placeholder="Email" onChange={(event) => {setEmail(event.target.value)}}/>
            <br />
            <input placeholder="Password" type='password' onChange={(event) => {setPassword(event.target.value)}}/>
            <br />
            <br />
            <button onClick={login} className='loginbtn2'> Login </button>

            <br />
            <br />
            <br />

            <h5>Dont have an account? </h5>
            <Link to={"/signuppage"} ><button className="loginbtn2">Sign Up</button></Link>
            <br />
            <br />
            
        </div>
    )
}