import {createUserWithEmailAndPassword} from "firebase/auth";
import { useState } from "react";
import {auth} from "../firebase-config"
import { useNavigate } from "react-router-dom";

export const Signup = () => {

    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate=useNavigate();

    const register = async () => {
        try{
            const user = await createUserWithEmailAndPassword(auth, email, password);
            console.log(user);
            alert("Registered successfully");
            navigate('/');
        }
        catch (error){
            alert(error.message + "\nFailed, Try again");
        }
    };
    // return <h1>HEY</h1>
    return (
        <div className="outline">
            <h4>SIGN UP</h4>
            <input placeholder="Email" onChange={(event) => {setEmail(event.target.value)}}/>
            <br />
            <input placeholder="Password" type='password' onChange={(event) => {setPassword(event.target.value)}}/>
            <br />
            <br />
            <button onClick={register} className='loginbtn2'> Sign up </button>
            <br />
            <br />
            <br />
        </div>
    )
    // return (
    //     <div>
    //         <
    //         {/* <br />
    //         <input placeholder="Email" />
    //         <input placeholder="Password" />
    //         <button> Sign up </button> */}
    //     </div>
    // )
}