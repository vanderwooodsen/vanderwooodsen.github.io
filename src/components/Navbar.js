import React from 'react';
import clsx from 'clsx';
import { FaTwitter, FaBehanceSquare, FaGithub, FaLinkedin, FaInstagramSquare, FaHome} from 'react-icons/fa';

export default function NavBar() {

  return (
       <nav id="navbar" className="fixed w-full z-10 top-0 bg-gray-800 ">
         <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
            <div className="pl-4 flex items-center">
            </div>
            <div className="block lg:hidden pr-4">
               <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-gray-50 border-blue-300 hover:text-gray-300 hover:border-blue-300 appearance-none focus:outline-none">
                  <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" >
                     <title>Menu</title>
                     <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                  </svg>
               </button>
            </div>
            <div className="w-full flex-grow lg:flex  lg:content-center lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 z-20" id="nav-content">
               <div className="flex-1 w-full mx-auto max-w-sm content-center py-4 lg:py-0">
                <ul className="list-reset lg:flex justify-end items-center">
                    <li className="mr-3 py-2 lg:py-0">
                      <a className="inline-block py-2 px-4 text-gray-50 hover:text-blue-500 font-bold no-underline" href="//www.linkedin.com/in/christidev/"><FaLinkedin/></a>
                    </li>
                    <li className="mr-3 py-2 lg:py-0">
                      <a className="inline-block text-gray-50 hover:text-gray-500 hover:underline py-2 px-4" href="//github.com/vanderwooodsen"><FaGithub/></a>
                    </li>
                    <li className="mr-3 py-2 lg:py-0">
                      <a className="inline-block text-gray-50 hover:text-yellow-500 hover:underline py-2 px-4" href="//www.behance.net/christine_tsiupa"><FaBehanceSquare/></a>
                    </li>
                    <li className="mr-3 py-2 lg:py-0">
                      <a className="inline-block text-gray-50 hover:text-blue-400 hover:underline py-2 px-4" href="//twitter.com/christicodes"><FaTwitter/></a>
                    </li>
                    <li className="mr-3 py-2 lg:py-0">
                      <a className="inline-block text-gray-50 hover:text-pink-500 hover:underline py-2 px-4" href="//www.instagram.com/christis_creations_/"><FaInstagramSquare/></a>
                    </li>
                </ul>
               </div>
               <ul className="list-reset lg:flex justify-end items-center">
                  <li className="mr-3 py-2 lg:py-0">
                     <a className="inline-block py-2 px-4 text-gray-50 hover:text-gray-500 no-underline" href="./Home.js"><FaHome/></a>
                  </li>
                  <li className="mr-3 py-2 lg:py-0">
                     <a className="inline-block text-gray-50 no-underline hover:text-gray-500  py-2 px-4" href="./AboutMe.js">About me</a>
                  </li>
                  <li className="mr-3 py-2 lg:py-0">
                     <a className="inline-block text-gray-50 no-underline hover:text-gray-500 py-2 px-4" href="./Skills.js">Skills</a>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
  );
}

