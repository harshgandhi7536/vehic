import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import '../css_files/menuPage.css'

function MenuPage() {
    const [showOptions, setShowOptions] = useState(false);
    const navigate = useNavigate();
    return (
        <div className="menuPage">
            <div className="vehicle_container">

                {/* CAR */}
                <div className="car">
                    <p>Car</p>
                </div>


                {/* PASSENGER SECTION */}
                <div className="passenger_container">

                    {/* Passenger Vehicle */}
                    <div
                        className={`passenger_vehicle ${showOptions ? 'active' : ''}`}
                        onClick={() => setShowOptions(true)}
                    >
                        <p>Passenger Vehicle</p>
                    </div>


                    {/* OPTIONS */}
                    {showOptions && (
                        <div className="options">

                            <div className="option" onClick={() =>navigate("/transport-sharing")}>
                                offer the transport ride
                            </div>

                            <div className="option">
                                Take the shared ride
                            </div>

                            <div className="option">
                                To rent entire vehicle
                            </div>

                        </div>
                    )}

                </div>

            </div>

        </div>
    
);
}

export default MenuPage;