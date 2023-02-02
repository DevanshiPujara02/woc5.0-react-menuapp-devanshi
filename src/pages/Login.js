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
        <div>
            <h4>LOGIN</h4>
            <br />
            <input placeholder="Email" onChange={(event) => {setEmail(event.target.value)}}/>
            <input placeholder="Password" type='password' onChange={(event) => {setPassword(event.target.value)}}/>
            <button onClick={login}> Login </button>

            <br />
            <h5>Dont have an account? </h5>
            <Link to={"/signuppage"} >Sign up</Link>
            
        </div>
    )
}