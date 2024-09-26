import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (

         
    
      <nav className=' w-full bg-transparent flex justify-between items-center px-4 py-4  overflow-auto'>
          <div className='logo font-bold bg-black text-white'>
        
        
        
          <h1 className='border-b-4 border-blue-700 hover:border-blue-500 font-bold'>
      
            Chittaranjan...
          </h1>
        
         
             
          
          </div>
      <ul>
        {/* bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded */}
        <li className='flex gap-4'>
  <Link className='px-4 py-2 hover:bg-sky-700 text-white rounded-lg bg-green-600 transition-colors duration-200 border-b-4 border-blue-700 hover:border-blue-500' to="/">Home</Link>
  <Link className='px-4 py-2 hover:bg-sky-700 text-white rounded-lg bg-green-600 transition-colors duration-200 border-b-4 border-blue-700 hover:border-blue-500' to="/contact">Passwordcreater</Link>
          <Link className='px-4 py-2 hover:bg-sky-700 text-white rounded-lg bg-green-600 transition-colors duration-200 border-b-4 border-blue-700 hover:border-blue-500' to="/about">Project</Link>
          <Link className='px-4 py-2 hover:bg-sky-700 text-white rounded-lg bg-green-600 transition-colors duration-200 border-b-4 border-blue-700 hover:border-blue-500' to="/Currency-converter">Currency Converter</Link>
</li>
            </ul>
      </nav>
  
  )
}

export default Navbar
