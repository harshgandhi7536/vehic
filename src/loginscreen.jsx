import { useState } from "react";
import {getAuth, signInWithEmailAndPassword} from "firebase/auth";
import {app} from "./firebase";

const auth=getAuth(app);
const LoginPage=()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signinUser = () =>{
        signInWithEmailAndPassword(auth, email, password)
        .then((value)=>console.log("Login Successfull", value))
        .catch((err) =>alert("Login Failed", err),
        setEmail(""),
        setPassword("")
    );
    }
     
    const handleOnEmailChange=(event)=>{
        setEmail(event.target.value);
    }

    const handleOnPasswordChange=(event)=>{
        setPassword(event.target.value);
    }
    
    return(
        <div className='loginPage'>
        <h4>Login Page</h4>
        <label htmlFor="Email">Enter Email</label>
        <input type="email" onChange={handleOnEmailChange} value={email} required placeholder="Enter Your Email here"/>
        <br />

        <label htmlFor="password">Enter Password</label>
        <input type="password" required onChange={handleOnPasswordChange} value={password} placeholder="Enter Your Password here"/>
        <br />
         <br />
         <button onClick={signinUser}>Login</button>
        </div>
    )
}

export default LoginPage;