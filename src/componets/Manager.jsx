import React from 'react';
import { useState} from 'react';

const Manager = () => {

    const [showPassword, setShowPassword] = useState(false);
    const handleClick = () => setShowPassword(!showPassword);
    const [form, setForm] = useState({ site: '', name: '', password: '' });
    


    const savePassword = (event) => {
        event.preventDefault();

        console.log(form);
     }

         




    const handelChange = (e) => { 
             setForm({ ...form, [e.target.name]: e.target.value });

    }



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
                    <input type="text" name='url' onChange={handelChange} value={form.url} className="border-2 border-green-300 p-2 rounded-full" placeholder="Enter URL"/>
                
                    <div className= "flex w-full justify-between gap-8 pt-3">
                        <input type="text" name='userName' onChange={handelChange} value={form.username} className="border-2 border-green-300 p-2 rounded-full w-full py-2 " placeholder="User name" />
                        <div className='relative'>
                            <input type={showPassword ? "text" : "password"} value={form.password} name='password' onChange={handelChange} className='border-2 border-green-300 p-2 rounded-full w-full  py-2' placeholder="Set PassWord"/>
                            <span className='absolute right-1 top-1 cursor-pointer' onClick={handleClick}>
                                <img className='p-0.5 width={50}' src={showPassword ? "eyecross.png" : "eye.png"} alt="eye" />
                            </span>
                        </div>
                    </div>
                </div>

                  
                <div className="flex justify-center pt-5" onClick={savePassword}>
                    <button  type='submit' className='bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full'>
                        
                        PassWord
                    </button>
                </div>    
                  
            </div>
        </div>
    )
}

export default Manager;