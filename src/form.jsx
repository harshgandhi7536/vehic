import { useState } from "react";    


export default function Form(){
    let [fullName, setFullName] = useState("Vaishnavi");
    
    // function to update the change in input field & in UI
    let handlenamechange=(event)=>{
        setFullName(event.target.value);
    }
    return (
        <form>
            /// Hiii
            /// input field with value & onChange event 
            /// value is binded with state variable & onChange event is binded with function to update the state variable
            
            /// onChange event is triggered when there is any change in the input field & it updates the state variable(fullname) 
            /// with the new value of input field
            <input type="text" placeholder="Enter ur name" value={(fullName)} onChange={handlenamechange} />
            <button>Submit</button>
        </form>    
    )
}