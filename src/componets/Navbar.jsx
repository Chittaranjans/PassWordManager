import React from 'react'
import '../index.css'
import { Link, Router } from 'react-router-dom';

function Navbar() {
  return (

         
    
      <nav className='bg-transparent flex justify-between place-items-center ps-1 px-4 pt-4 pb-4  h-30'>
          <div className='logo font-bold bg-black text-white'>
        
        
        
          <h1>
            Chittaranjan...
          </h1>
        
         
             
          
          </div>
          <ul>
        <li className='flex gap-4'>
          
          <Link className='hover:bg-sky-700  bg-black text-white' to="/">Home</Link>
          
          <Link className = 'hover:bg-sky-700  bg-black text-white'  to="/contact">Contact</Link>
          
            <Link className='hover:bg-sky-700  bg-black text-white' to="/about">About</Link> 
          
                


               </li>
              
            </ul>
      </nav>
  
  )
}

export default Navbar