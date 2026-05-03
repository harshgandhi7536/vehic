import { useState } from "react";    
import {getAuth, createUserWithEmailAndPassword}  from "firebase/auth";
import {app} from "./firebase";
const auth=getAuth(app);

export default function Form(){

    const signupuser = () =>{
        createUserWithEmailAndPassword(auth, mailId, password)
        .then((value) =>console.log(value));
    }
    let [fullName, setFullName] = useState("Vaishnavi");
    let[password, setPassword]=useState("");
    let[mailId, setMailId]=useState("");

    // function to update the change in input field & in UI
    let handlenamechange=(event)=>{
        setFullName(event.target.value);
    }

    let handlepassword=(event)=>{
        setPassword(event.target.value);
    }

    let handlemail=(event)=>{
        setMailId(event.target.value);
    }
    return (
        <form>
            
            
            {/*input field with value & onChange event
            /// value is binded with state variable & onChange event is binded with function to update the state variable
            
            /// onChange event is triggered when there is any change in the input field & it updates the state variable(fullname) 
            /// with the new value of input field */}
            
                <br />
                <br /><br />
            <label htmlFor="username">Enter UserName</label>
            <input className="username" type="text" placeholder="Enter ur name" value={(fullName)} onChange={handlenamechange} />
            <br />
            <label htmlFor="mailId">Enter mailId</label>
            <input className="mailId" type="text" placeholder="Enter mailId" value={(mailId)} onChange={handlemail} />
            <br />
            <label htmlFor="password">Enter Password</label>
            <input className="password" type="password" placeholder="Enter password" value={(password)} onChange={handlepassword} />
            <br /><br /><br />
            <button onClick={signupuser}>Submit</button>
        </form>    
    )
}