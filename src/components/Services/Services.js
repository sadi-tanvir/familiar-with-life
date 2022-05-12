import React from 'react';
import Service from "./Service"
import {serviceData} from "./serviceData"


const Services = () => {
    
    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 flex justify-center items-center">
            {serviceData.map(data => <Service data={data} />)}
        </div>
        </>
    );
};

export default Services;