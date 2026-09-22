import react from 'react';
import { useState } from 'react';
import '../css_files/transportsharing.css'
import {getFirestore, collection, addDoc} from 'firebase/firestore'
import {app} from "../firebase";

 const TransportSharingPage=()=>{

const [from, setFromChange]=useState("");
const [to, setToChange]=useState("");
const [selectedvehicle, setSelectedVehicle]=useState("select vehicle");
const [date, setDate]=useState("");
const [time, setTime]=useState("");

    const handleFromChange=(event)=>{
        setFromChange(event.target.value);
    }

    const handleToChange=(event)=>{
        setToChange(event.target.value);
    }

    const handleDate=(event) =>{
        setDate(event.target.value);    
    }

    const handleTime=(event) =>{
        setTime(event.target.value);    
    }

    const firestore= getFirestore(app);
    const writeData =async () => {
        const result = await addDoc(collection(firestore, 'vehicles'), {
            from:from,
            to:to,
            date:date,
            time:time
        })
    console.log("RESULT ", result);

    }

    return (
    <div className="main">
        <div className="firstbox">
            <div className="first">
                <label htmlFor="">FROM</label>
                <input type="text" onChange={handleFromChange} value={from} required />
            
                <label htmlFor="">TO</label>
                <input type="text" onChange={handleToChange} value={to} required/>
            </div>
            
            
            <div className="second">
                {/* <div>
                    Width: {window.innerWidth}
                    <br />
                    Height: {window.innerHeight}
                </div> */}

                <label htmlFor="">DATE</label>
                <input type="date" onChange={handleDate} value={date}/>

                <label htmlFor="">TIME</label>
                <input type="time" onChange={handleTime} value={time}/>
            </div>
        </div>


        {/* // --------- Second box -------------- */}
        <div className="secondbox">
                    <div>
                                <label htmlFor="vehicle">Select Vehicle</label>
                                <select
                                id="vehicle"
                                value={selectedvehicle}
                                onChange={(event)=>setSelectedVehicle(event.target.value)}
                                >
                                onclick={(event)=>setSelectedVehicle(event.target.value)}
                                
                                    <option value="">--CHOOSE VEHICLE ---</option>
                                    <option value="Tata Intra">Tata Intra</option>
                                    <option value="Tata Intra">Tata Intra</option>
                                    <option value="Ashok Leyland">Ashok Leyland</option>
                                    <option value="Eicher Tempo">Eicher Tempo</option>
                                    <option value="Yellow Piaggio">Yellow Piaggio</option>
                                    <option value="Auto  Rickshaw">Auto  Rickshaw</option>
                                    <option value="Tata Truck">Tata Truck</option>     
                                    <option value="Carry">Carry</option>
                                  </select>                                                               <option value="Tata Intra">Tata Intra</option>
                                
                            </div>
        </div>


        <div className="thirdbox">
            <button onClick={writeData}> SUBMIT</button> 
        </div>
    </div>
    )
}

export default TransportSharingPage;