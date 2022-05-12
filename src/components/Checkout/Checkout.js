import axios from 'axios';
import React, { useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import check from "../../images/banner/service-1.jpg"
import {serviceData} from "../Services/serviceData"

const Checkout = () => {
    const {appointId} = useParams()
    const navigate = useNavigate()
    const appointmentCategory = serviceData.find(data => data.id == appointId)
    
    return (
        <div className={`w-full min-h-screen flex justify-center items-center ${appointmentCategory ? 'my-5':'-mt-20'}`}>
            <div className="w-11/12 md:w-8/12 shadow">
                {!appointmentCategory && <h1 className="font-bold text-slate-600 text-center uppercase pt-5">You Don't Have Any Appointment</h1>}
                <div className="px-6 py-5 shadow">
                    {appointmentCategory?.img && <img className="rounded-lg h-3/6 w-full shadow-md" src={appointmentCategory?.img} alt="" />}
                    <div className="mt-6">
                        {appointmentCategory?.name && <h1 className="text-slate-700">{appointmentCategory?.name}</h1>}
                        {appointmentCategory?.fee && <h4 className="text-slate-700">Fee: {appointmentCategory?.fee}</h4>}
                        <small>{appointmentCategory?.description}</small>
                    </div>
                    {
                    appointmentCategory ?
                    <button className="px-5 py-2 bg-red-500 shadow-md text-white w-full font-bold rounded-md mt-3">Confirm your Appointment</button>
                    :
                    <div className="w-full flex flex-col justify-center items-center">
                        <button onClick={() => navigate('/services')} className="px-5 py-2 bg-red-500 shadow-md text-white w-full font-bold rounded-md mt-3 uppercase">go for an appointment</button>
                    </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Checkout;