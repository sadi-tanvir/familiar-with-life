import React from 'react';

const Error404 = () => {
    return (
        <>
            <div className="w-full min-h-screen mt-20">
                <h1 className="text-6xl md:text-8xl font-bold text-center text-slate-700">Error 404!</h1>
                <p className="text-lg md:text-3xl font-semibold text-slate-500 text-center mt-2">The page you requested does not exist or <br /> has moved.</p>
            </div>
        </>
    );
};

export default Error404;