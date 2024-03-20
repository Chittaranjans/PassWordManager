import React from 'react'
import '../index.css'
function Navbar() {
  return (
      <nav className='bg-transparent flex justify-between place-items-center px-4 h-25'>
          <div className='logo font-bold bg-black text-white'>
             <span className='text-green-700'>&lt;</span> 
              MyPasswordBox
             <span className='text-green-700'>&gt;</span>
          
          </div>
          <ul>
              <li className='flex gap-4'>
                  <a href='#' className='hover:bg-sky-700  bg-black text-white'>Home</a>
                  <a href="#" className='hover:bg-sky-700 bg-black text-white'>Contact</a>
                    <a href="#" className='hover:bg-sky-700 bg-black text-white'>About</a>
                


               </li>
              
            </ul>
      </nav>
  )
}

export default Navbar