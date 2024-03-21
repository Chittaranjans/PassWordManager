import React, { useEffect } from 'react';
import { useState } from 'react';






const Manager = () => {

    const [showPassword, setShowPassword] = useState(false);
    const handleClick = () => setShowPassword(!showPassword);
    const [form, setForm] = useState({ url: '', username: '', password: '' , email: '', id: ''  });
    const [passwords, setPasswords] = useState([]);

    useEffect(() => {

        const data = localStorage.getItem('passwords');
        if (data) {
            setPasswords(JSON.parse(data));
        
        }
     }, []);


    const savePassword = (event) => {
        
       localStorage.setItem('passwords', JSON.stringify([...passwords, form])); 
        setPasswords([...passwords, form]);
        console.log(...passwords, form);
        
     }

    //      const [editingPassword, setEditingPassword] = useState(null);
    // const savePassword = (event) => {
    // if (editingPassword !== null) {
    //     // If we are editing a password, update it
    //     setPasswords(passwords.map((password, index) => index === editingPassword ? form : setForm));
    // } else {
    //     // If we are not editing a password, add a new one
    //     setPasswords([...passwords, form]);
    // }
    // localStorage.setItem('passwords', JSON.stringify(passwords));
    // setEditingPassword(null); // Reset the editing password


const editpassword = (event) => { 
    // setPassword(event.target.passwords); // Set the editing password
    localStorage.setItem('passwords', JSON.stringify([...passwords, form])); 
    setForm(passwords[event.target.passwords]); // Set the form values to the values of the editing password
    }
    



    const handelChange = (e) => { 
             setForm({ ...form, [e.target.name]: e.target.value });

    }



    return (
        
        <div>
            
            <div className="fixed inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            <div className="container mx-auto px-4 pt-6">
                
                <h1 className='text-4xl text-font-bold text-center'>
                    <span className='text-green-700'>&lt;</span>
                    <span className='text-white'>Genereat</span><span className='text-green-700'>Pass/&gt;</span>

                </h1>

                <p className='text-green-100 text-lg text-center'>YOUR OWN PASSWORD MANAGER</p>
                <div className="flex flex-col space-y-4 pt-5" >
                    <input type="text" name='url' onChange={handelChange} value={form.url} className="border-2 border-green-300 p-2 rounded-full" placeholder="Enter URL" />
                    <input type="text" name='email' onChange={handelChange} value={form.email} className="border-2 border-green-300 p-2 rounded-full" placeholder="Enter Email Address"/>
                
                    <div className= "flex w-full justify-between gap-8 pt-3">
                        <input type="text" name='username' onChange={handelChange} value={form.username} className="border-2 border-green-300 p-2 rounded-full w-full py-2 " placeholder="User name" />
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
                 <div className="bg-transparent pt-5 py-5 flex ">
                      <div className="mx-auto w-[90%] shadow-[0_35px_60px_-15px_rgba(1,1,1,1)] rounded-lg">
                             <div className="bg-transparent py-20 ">
                                    <div className="px-4 sm:px-6 lg:px-8 pb-2">
                                           <div className="sm:flex sm:items-center justify-center">
                                               <div className="flex pt-0 mb-5 flex-col items-center">
                                                   <h1 className="text-center  text-white font-bold text-4xl py-1 mb-1">Passwords</h1>
                                                   <p className="mt-2 text-sm text-gray-300 text-center">A list of all the users in your account including their name, URL, email and Passwords.</p>
                                                </div>
                                                   
                            </div> 
                            {passwords.length === 0 && <p className="text-center text-white">No Passwords</p>}
                            {passwords.length > 0 &&
                                <div className="mt-8 flow-root pt-5 w-full">
                                    <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                            <table className="min-w-full divide-y divide-gray-700">
                                                <thead>
                                                    <tr>
                                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-white sm:pl-0">Name</th>
                                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Website</th>
                                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">Email</th>
                                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-white">password</th>
                                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-0">
                                                            <span className="sr-only">Edit</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-800">
                                                  {passwords.map(( items, index) => (
                                                        <tr key={index}>
                                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-white sm:pl-0">{items.username}</td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{items.url}</td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{items.email}</td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{items.password}</td>
                                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-0">
                                                                <a href="#" className="text-indigo-400 hover:text-indigo-300"onClick={editpassword}>Edit<span className="sr-only">, {items.username}</span></a>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                    
            
                                                </tbody>
                                                
            
                                            
                                            </table>
                                        </div>
                                    </div>
                                </div>}
                                                           </div>
                                                             </div>
                                                              </div>
                                                               </div>


    </div>
    )
}

export default Manager;