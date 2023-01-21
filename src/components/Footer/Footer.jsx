import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
     <div className='main relative h-60 overflow-hidden bg-white dark:bg-green-700'>
       <div className='header z-30 flex items-center w-full h-24 sm:h-32 mt-4 px-12'>
        <div className='items-center px-6 py-2 text-white font-sen'>
                  <h1 className='flex mt-2 text-3xl font-semibold'>
                      About
                    </h1>
                    <p className=' mt-2'>
                    is simply dummy text of the printing and typesetting industry. 
                    </p>
               </div>
               <div className='items-center px-6 py-2 text-white font-sen '>
                  <h1 className='flex mt-2 text-3xl font-semibold'>
                      Contact
                    </h1>
                    <p className=' mt-2 '>
                    is simply dummy text of the printing and typesetting industry. 
                    </p>
               </div>
                  
               
            
       </div>
    </div> 
  )
}

export default Footer




