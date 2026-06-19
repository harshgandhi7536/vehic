import react from 'react';
import { useState } from 'react';
import '../css_files/transportsharing.css'


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


        // --------- Second box --------------
        <div className="secondbox">
                    <label htmlFor="vehicle">Choose a vehicle</label>

                            <div>

                                <label htmlFor="vehicle">Select Vehicle</label>
                                <select>
                                id="vehicle"
                                value={selectedvehicle}
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
                                                                                                 <option value="Tata Intra">Tata Intra</option>
                                </select>
                            </div>
        </div>


        <div className="thirdbox">

        </div>
    </div>
    )
}

export default TransportSharingPage;