import React from 'react'
import Logo from '../images/Logo.png'

const NavBar = () => {
  return (
      <>
        <nav className="bg-white flex flex-row">
            <div className="container flex items-center pl-4 justify-start w-16">
              <img src={Logo} alt='Chacha Coco Logo'></img>
            </div>
            <div className="flex-1 container flex items-center justify-end p-6 mx-auto capitalize dark:text-black-200">
                <a href="/" className="border-b-2 border-transparent hover:text-green-600 transition-colors duration-300 transform dark:hover:text-green-600 hover:border-green-600 mx-1.5 sm:mx-6">Home</a>

                <a href="./Products" className="border-b-2 border-transparent hover:text-green-600 transition-colors duration-300 transform dark:hover:text-green-600 hover:border-green-600 mx-1.5 sm:mx-6">Products & Services</a>

                <a href="./AboutUs" className="border-b-2 border-transparent hover:text-green-600 transition-colors duration-300 transform dark:hover:text-green-600 hover:border-green-600 mx-1.5 sm:mx-6">About Us</a>

                <a href="./Gallery" className="border-b-2 border-transparent hover:text-green-600 transition-colors duration-300 transform dark:hover:text-green-600 hover:border-green-600 mx-1.5 sm:mx-6">Gallery</a>

                <a href="./Contact" className="border-b-2 border-transparent hover:text-green-600 transition-colors duration-300 transform dark:hover:text-green-600 hover:border-green-600 mx-1.5 sm:mx-6">Contact Us</a>
            </div>
        </nav>
      </>
  )
}

export default NavBar