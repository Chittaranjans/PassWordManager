import React from 'react';

const Manager = () => {
    return (
        <div>
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            <div className="container mx-auto px-4 pt-6">
                
                <h1 className='text-4xl text-font-bold text-center'>
                    <span className='text-green-700'>&lt;</span>
                    <span className='text-white'>Genereat</span><span className='text-green-700'>Pass/&gt;</span>

                </h1>

                <p className='text-green-100 text-lg text-center'>YOUR OWN PASSWORD MANAGER</p>
                <div className="flex flex-col space-y-4 pt-5" >
                    <input type="text" className="border-2 border-green-300 p-2 rounded-full" placeholder="Input 1"/>
                
                    <div className= "flex w-full justify-between gap-8 pt-3">
                        <input type="text" className="border-2 border-green-300 p-2 rounded-full w-full py-2 " placeholder="Input 2"/>
                        <input type="text" className="border-2 border-green-300 p-2 rounded-full w-full py-2 " placeholder="Input 3" />
                    </div>
                </div>

                <div className="flex justify-center pt-5">
                    <button className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full'>
                        <lord-icon
                              src="https://cdn.lordicon.com/vfczflna.json"
                              trigger="hover">
                        </lord-icon>
                        PassWord
                    </button>
                </div>    
            </div>
        </div>
    )
}

export default Manager;