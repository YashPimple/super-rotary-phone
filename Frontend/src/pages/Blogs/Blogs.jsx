import React from 'react'
import { Link } from 'react-router-dom'

const blogs = () => {
  return (
    <div className='top-row flex flex-row ml-7 h-screen '>
        <div className='group mt-3 h-80 w-80 ml-4'>
              <img
              alt="Lava"
              src="https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGVhbHRofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
              class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
              />
            <div class="p-4">
            <Link>
              <h3 class="text-lg font-medium text-gray-900">
              Healthy Food Habits
              </h3>
            </Link>

            <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
              dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
              sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
              voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
              Molestias explicabo corporis voluptatem?
            </p>
          </div>
          
       </div>

       <div className='group mt-3 h-80 w-80 ml-4'>
                <img
              alt="Lava"
              src="https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aGVhbHRofGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1200&q=60"
              class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
              />
            <div class="p-4">
            <Link>
              <h3 class="text-lg font-medium text-gray-900">
              The secret to optimal health
              </h3>
            </Link>

            <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
              dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
              sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
              voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
              Molestias explicabo corporis voluptatem?
            </p>
          </div>
          
       </div>

       <div className='group mt-3 h-80 w-80 ml-4'>
                <img
              alt="Lava"
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGhlYWx0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60"
              class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
              />
            <div class="p-4">
            <Link>
              <h3 class="text-lg font-medium text-gray-900">
              Fuel your body, fuel your life
              </h3>
            </Link>

            <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
              dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
              sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
              voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
              Molestias explicabo corporis voluptatem?
            </p>
          </div>
          
       </div>

       <div className='group mt-3 h-80 w-80 ml-4'>
                <img
              alt="Lava"
              src="https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGhlYWx0aHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1200&q=60"
              class="h-56 w-full rounded-xl object-cover shadow-xl transition group-hover:grayscale-[50%]"
              />
            <div class="p-4">
            <Link>
              <h3 class="text-lg font-medium text-gray-900">
              Nourish your mind, body, and soul with a healthy diet
              </h3>
            </Link>

            <p class="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae
              dolores, possimus pariatur animi temporibus nesciunt praesentium dolore
              sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta,
              voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
              Molestias explicabo corporis voluptatem?
            </p>
          </div>
    
          
          
       </div>
    </div>



    
    
            

        
    
  )
}

export default blogs