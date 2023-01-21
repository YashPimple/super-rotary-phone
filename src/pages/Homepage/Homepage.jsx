import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return ( <>
    <div className=' h-96 flex top'>
        <div className='main group block h-56 w-96 ml-56 mt-20'>
              <div className='relative flex h-full items-end rounded-3xl border-4 cursor-pointer border-black bg-green-600 p-8 transition group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_0_#000]'>
                  <Link className='lg:group-hover:absolute lg:group-hover:opacity-0' to="/blogs">
                  <span aria-hidden="true" role="img" className="text-3xl sm:text-4xl"></span>
                      <p className="mt-4 text-xl text-white font-bold sm:text-2xl">Discover new perspectives, gain insights, and expand your knowledge through our blog</p>
                  </Link>

                  <div
                    class="absolute opacity-0 lg:group-hover:relative lg:group-hover:opacity-100">
                    <h3 class="text-2xl text-white font-bold">Healthline Nutrition</h3>

                    <p class="mt-4 text-lg font-medium  text-white leading-relaxed">
                     The Art of Living Healthy
                    </p>
                  </div>
              </div>

        </div>


        <div className='main group block h-56 w-96 mt-20 ml-56'>
              <Link className='relative flex h-full items-end rounded-3xl border-4 cursor-pointer  border-black bg-green-600 p-8 transition group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_0_#000]' to="/calculate">
                  <div className='lg:group-hover:absolute lg:group-hover:opacity-0' >
                  <span aria-hidden="true" role="img" className="text-3xl sm:text-4xl text-white"></span>
                      <p className="mt-4 text-xl text-white font-bold sm:text-2xl">Your Daily Summary</p>
                  </div>

                  <div
                    class="absolute opacity-0 lg:group-hover:relative lg:group-hover:opacity-100">
                    <h3 class="text-2xl text-white font-bold">Calculate Your Intake</h3>

                    <p class="mt-4 text-lg font-medium  text-white leading-relaxed">
                     Track Your Daily Calories
                    </p>
                  </div>
              </Link>

        </div>
  </div>

  <div className='bottom flex justify-center'>
        <div className='main group block h-56 w-96 mb-10 ml-30 align-middle'>
              <Link className='relative flex h-full items-end rounded-3xl border-4 cursor-pointer  border-black bg-green-600 p-8 transition group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:shadow-[8px_8px_0_0_#000]' to="/calculate">
                  <div className='lg:group-hover:absolute lg:group-hover:opacity-0' >
                  <span aria-hidden="true" role="img" className="text-3xl sm:text-4xl text-white"></span>
                      <p className="mt-4 text-xl text-white font-bold sm:text-2xl">Goals💪🏻</p>
                  </div>

                  <div
                    class="absolute opacity-0 lg:group-hover:relative lg:group-hover:opacity-100">
                    <h3 class="text-2xl text-white font-bold">Calculate Your Intake</h3>

                    <p class="mt-4 text-lg font-medium  text-white leading-relaxed">
                     Track Your Daily Calories
                    </p>
                  </div>
              </Link>

        </div>
   </div>


   <div className='section mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8'>
   <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
      <div
        className="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
      >
        <img
          alt="Party"
          src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div class="lg:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl">Are You Eating Enough Protien?</h2>

        <p className="mt-4 text-gray-600">
        Protein is essential for our bodies to work properly from head to toe. 
        Getting the right amount of protein is important and depends on each individual.
        You can think of protein as the worker bees of your body
        </p>

        <Link
          to="/blogs"
          className="mt-8 inline-flex items-center rounded border border-green-600 bg-green-600 px-8 py-3 text-white hover:bg-transparent hover:text-green-600 focus:outline-none focus:ring active:text-indigo-500"
        >
          <span className="text-sm font-medium" > Read More </span>

          <svg
            className="ml-3 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
   </div>
  </>

  )
}

export default Homepage