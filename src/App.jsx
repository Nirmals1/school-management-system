import { useState } from 'react'
import AdminLayout from './Layouts/AdminLayout'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <AdminLayout>
     <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-blue-400 mb-3">
  <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
    <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
      <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white" href="#pablo">
        SMS
      </a>
      <button class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" type="button">
        <span class="block relative w-6 h-px rounded-sm bg-white"></span>
        <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
        <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
      </button>
    </div>
    <div class="lg:flex flex-grow items-center" id="example-navbar-warning">
      <ul class="flex flex-col lg:flex-row list-none mr-auto">
        <li class="nav-item">
          <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
            <i class="fab fa-facebook-square text-lg leading-lg text-white opacity-75" /> 
          </a>
        </li>
        <li class="nav-item">
          <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
            <i class="fab fa-twitter text-lg leading-lg text-white opacity-75" /> <span class="ml-2">Home</span>
          </a>
        </li>
        <li class="nav-item">
          <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
            <span class="ml-2">Activities</span>
          </a>
        </li>
      </ul>
      <div class="relative flex w-full sm:w-7/12 md:w-5/12 px-4 flex-wrap items-stretch lg:ml-auto">
        <div class="flex">
          <span class="font-normal leading-snug flex text-center white-space-no-wrap border border-solid border-pink-600 rounded-full text-sm bg-pink-100 items-center rounded-r-none pl-2 py-1 text-pink-800 border-r-0 placeholder-pink-300">
            <i class="fas fa-search"></i>
          </span>
        </div>
        <input type="text" class="px-2 py-1 h-8 border border-solid  border-pink-600 rounded-full text-sm leading-snug text-pink-700 bg-pink-100 shadow-none outline-none focus:outline-none w-full font-normal rounded-l-none flex-1 border-l-0 placeholder-pink-300" placeholder="Search " />
      </div>
      <li class="nav-item">
          <a class="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" href="#pablo">
            <i class="fab fa-twitter text-lg leading-lg text-white opacity-75" /> <span class="ml-2">Login</span>
          </a>
        </li>
      
    </div>
    
  </div>
</nav>
</AdminLayout>
    </>
  )
}

export default App
