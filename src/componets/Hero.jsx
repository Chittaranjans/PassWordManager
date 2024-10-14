import React from 'react';

function Hero() {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-5xl font-bold mb-4">Hello, I'm Show Here</h1>
            <div className="flex flex-wrap justify-center gap-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Project 1
                </button>
                <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
                    Project 2
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                    Project 3
                </button>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    Project 4
                </button>
            </div>
        </div>
    );
}

export default Hero;