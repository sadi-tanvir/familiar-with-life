import React from 'react';
import { useNavigate } from 'react-router-dom';
import classes from "./Home.module.css"

const Banner = () => {
    const navigate = useNavigate()
    return (
        <div className={`w-full h-screen flex flex-col justify-center items-center ${classes.doctorBG}`}>
            <div className="w-11/12 flex flex-col justify-start mt-0">
                <h1 className="text-slate-700 font-bold -mt-44">
                    Hi! my Name is Tanvir hossain Sadi <br />
                    <span className="text-red-500 font-bold">
                    I am a Experts in Heart Health
                    </span>
                </h1>
                <small className="text-slate-600">MBBS (DMU), FCPS (Surgery) MD (USA), FCVS (USA), Advance Fellowship in Cardiovascular Surgery (Mayoclinic, USA)</small>
            </div>
            <button onClick={() => navigate('/services')} className="px-5 py-2 bg-red-500 text-white font-bold rounded-md mr-auto ml-12 mt-20">Make An Appointment</button>
        </div>
    );
};

export default Banner;