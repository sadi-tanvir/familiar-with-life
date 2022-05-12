import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({data}) => {
    const {id,img, name, fee,description} = data
    const navigate = useNavigate()

    const handleAppointment = () => {
        navigate(`/checkout/${id}`)
    }
    return (
        <div className="px-6 py-5 shadow">
            <img className="rounded-lg h-3/6 w-full shadow-md" src={img} alt="" />
            <div className="mt-6">
                <h1 className="text-slate-700">{name}</h1>
                <h4 className="text-slate-700">Fee: {fee}</h4>
                <small title={description}>{description.length >= 90 ? `${description.slice(0, 90)}....` : description}</small>
            </div>
            <button onClick={handleAppointment} className="px-5 py-2 bg-red-500 shadow-md text-white w-full font-bold rounded-md mt-3">Make An Appointment</button>
        </div>
    );
};

export default Service;