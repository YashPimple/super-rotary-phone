import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='main relative h-50 overflow-hidden bg-white dark:bg-green-700'>
       <div className='header z-30 flex items-center w-full h-24 sm:h-32 '>

            <div className='container flex items-center justify-between px-6 mx-auto'>
               <div className='text-3xl font-black text-gray-800 uppercase dark:text-white'> 
                 NOURISH.NET
                </div>
                <div className='flex items-center'>
                   <div className='items-center hidden text-lg text-gray-800 uppercase font-sen dark:text-white lg:flex'>
                   <Link class="flex px-6 py-2">
                        Home
                    </Link>
                    <Link class="flex px-6 py-2">
                        Blogs
                    </Link>
                    <Link class="flex px-6 py-2">
                        Calculate
                    </Link>
                    <Link class="flex px-6 py-2">
                        About
                    </Link>
                    <Link class="flex px-6 py-2">
                        Contact
                    </Link>
                   </div>
                   <button class="flex flex-col ml-4 lg:hidden">
                    <span class="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                    </span>
                    <span class="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                    </span>
                    <span class="w-6 h-1 mb-1 bg-gray-800 dark:bg-white">
                    </span>
                </button>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Navbar