import React from 'react';
import ReactHelmet from '../shared/Helmet/ReactHelmet';

const About = () => {
    return (
        <>
        <ReactHelmet title="About" />

        <div className="w-full min-h-screen flex justify-center items-center -mt-20">
            <div className="w-11/12 md:w-7/12 shadow-2xl flex">
                <div className="ml-3 w-full py-4 pr-3">
                    <h1 className="text-4xl font-bold">About myself</h1>
                    <hr />
                    <p className="m-0 p-0 font-bold">Name: Tanvir Hossain Sadi</p>
                    <p className="m-0 p-0">Email: htanvir.sadi@gmail.com</p>
                    <p className="m-0 p-0">phone: +8801881-540890</p>

                    <span className="mt-4 inline-block">My name is Tanvir Hossain Sadi, I always try to be a good programmer. For that I was admitted in the 5th batch of Programming Hero. And I'm going to take a course with the goal of becoming a better developer.</span>
                </div>
            </div>
        </div>
        </>
    );
};

export default About;