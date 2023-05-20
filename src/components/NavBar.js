import React from 'react'
import Logo from '../images/Logo.png'

const NavBar = () => {
  return (
      <>
        <nav className="bg-white grid grid-cols-2">
            <div className="container flex items-center pl-4 justify-start w-16">
              <img src={Logo}></img>
            </div>
            <div className="container flex items-center justify-end p-6 mx-auto capitalize dark:text-black-200">
                <a href="#" className="border-b-2 border-transparent hover:text-green-600 transition-colors duration-300 transform dark:hover:text-green-600 hover:border-green-600 mx-1.5 sm:mx-6">Home</a>

                <a href="#" className="border-b-2 border-transparent hover:text-green-600 transition-colors duration-300 transform dark:hover:text-green-600 hover:border-green-600 mx-1.5 sm:mx-6">Products & Services</a>

                <a href="#" className="border-b-2 border-transparent hover:text-green-600 transition-colors duration-300 transform dark:hover:text-green-600 hover:border-green-600 mx-1.5 sm:mx-6">About Us</a>

                <a href="#" className="border-b-2 border-transparent hover:text-green-600 transition-colors duration-300 transform dark:hover:text-green-600 hover:border-green-600 mx-1.5 sm:mx-6">Contact Us</a>
            </div>
        </nav>
      </>
  )
}

export default NavBar