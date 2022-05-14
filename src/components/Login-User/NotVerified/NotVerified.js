import React from 'react';

const NotVerified = ({sendEmailVerification}) => {

    const handleEmailVerification = async () => {
        await sendEmailVerification()
        alert('verification link sent!')
    }
    return (
        <div>
            <div className={`w-full min-h-screen flex justify-center items-center -my-20`}>
            <div className="w-11/12 md:w-8/12 shadow">
                <div className="mb-5">
                <h1 className="font-bold text-slate-600 text-center uppercase pt-5">Your Email is not verified</h1>
                <h5 className="font-bold text-slate-600 text-center uppercase ">please! go to your email and active your link</h5>
                </div>
                    <div className="w-full flex flex-col justify-center items-center">
                        <button onClick={handleEmailVerification} className="px-5 py-2 bg-red-500 shadow-md text-white w-full font-bold rounded-md mt-3 uppercase">send verification again</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotVerified;