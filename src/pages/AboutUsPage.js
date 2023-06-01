import React from 'react'
import { useState } from 'react'

import NavBar from '../components/NavBar'
import Banner2 from '../images/Banner2.jpg'
import Footer from '../components/Footer'
import Hemantha from '../images/Hemantha_Director.png'
import Sarath from '../images/Sarath_CEO.jpg'
import Upali from '../images/Upali_Director.jpg'
import Certificate from '../images/BR_Certificate.png'
import CertificateModal from '../components/modals/CertificateModal'

const AboutUsPage = () => {

  const [popUp, setPopUp] = useState(false);

  return (
    <>
        <NavBar/>

        <div className="grid grid-cols-1 lg:grid-cols-2 mt-8">
          <div className="flex flex-col">
            <div className="flex-1 text-start md:p-8 sm:p-4">
              <div className="lg:pl-16 sm:text-2xl md:text-3xl lg:text-5xl text-green-500 font-bold">
                  About Us
              </div>
              <p className='lg:pl-16 sm:text-xl lg:text-xl lg:w-5/6 text-gray-600 mt-8'> 
                At CHACHÅ COCO, we specialize in the production and export of premium quality coco peat products. 
                With years of experience and expertise in the industry, 
                we take pride in delivering sustainable and eco-friendly solutions for horticultural and agricultural needs worldwide.<br/><br/>

                Our mission is to provide superior coco peat products that meet the highest quality standards while promoting environmentally conscious practices. 
                We strive to be a leading exporter in the industry, 
                fostering long-term relationships with our clients based on trust, reliability, and exceptional customer service.
              </p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="flex-1 md:p-8 sm:p-4">
            <img className='h-full' src={Banner2} alt='Coco Peat'></img>
            </div>
          </div>
      </div>

      <div className="mb-16">
          <dh-component>
              <div className="container flex justify-center mx-auto pt-16">
                  <div>
                      <p className="text-gray-700 text-5xl text-center font-bold pb-3">OUR TEAM</p>
                      <h1 className="xl:text-xl text-xl text-center text-gray-800 pb-6 sm:w-4/6 w-5/6 mx-auto">
                        Our team consisting three personnel in top
                        management and 15 personnel in executives
                        and minor staff. Top management team having more than 30 years of export management
                        experience in various coconut-related products
                        with a very superior coir export company in Sri
                        Lanka. Other executives and minor staff also
                        have very good experience in grow bag
                        productions. 
                      </h1>
                  </div>
              </div>
              <div className="w-full bg-gray-100 px-10 pt-10">
                  <div className="container mx-auto">
                      <div role="list" aria-label="Behind the scenes People " className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                          <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                              <div className="rounded overflow-hidden shadow-md bg-white lg:h-52">
                                  <div className="absolute -mt-20 w-full flex justify-center">
                                      <div className="h-32 w-32">
                                          <img src={Hemantha} alt="Hemantha Hettiarachchi" className="rounded-full object-cover h-full w-full shadow-md" />
                                      </div>
                                  </div>
                                  <div className="px-6 mt-16">
                                      <h1 className="font-bold text-3xl text-center mb-1">Hemantha Hettiarachchi[MBA]</h1>
                                      <p className="text-gray-800 text-sm text-center font-semibold">Director – Production, Quality
                                          Control, Research & Development
                                      </p>
                                  </div>
                              </div>
                          </div>
                          <div role="listitem" className="xl:w-1/3 lg:mx-3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                              <div className="rounded overflow-hidden shadow-md bg-white lg:h-52">
                                  <div className="absolute -mt-20 w-full flex justify-center">
                                      <div className="h-32 w-32">
                                          <img src={Sarath} alt="Sarath Wijesinghe[AMICE]" className="rounded-full object-cover h-full w-full shadow-md" />
                                      </div>
                                  </div>
                                  <div className="px-6 mt-16">
                                      <h1 className="font-bold text-3xl text-center mb-1">Sarath Wijesinghe[AMICE] </h1>
                                      <p className="text-gray-800 text-sm text-center font-semibold">Managing Director/ CEO</p>
                                  </div>
                              </div>
                          </div>
                          <div role="listitem" className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                              <div className="rounded overflow-hidden shadow-md bg-white lg:h-52">
                                  <div className="absolute -mt-20 w-full flex justify-center">
                                      <div className="h-32 w-32">
                                          <img src={Upali} alt="Upali Dissanayake" className="rounded-full object-cover h-full w-full shadow-md" />
                                      </div>
                                  </div>
                                  <div className="px-6 mt-16">
                                      <h1 className="font-bold text-3xl text-center mb-1">Upali Dissanayake</h1>
                                      <p className="text-gray-800 text-sm text-center font-semibold">Director – Supply Chain Management</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </dh-component>
      </div>
      
      <div>
        <h1 className="text-2xl md:text-3xl xl:text-4xl mx-12 text-center font-bold text-green-500 tracking-tight mb-12 mt-12">Business Registration Certificate<br />
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-12 mt-8 xl:mt-12">
        <div className="overflow-hidden bg-cover bg-center rounded-lg cursor-pointer w-96 h-96 group"
            style={{backgroundImage:`url(${Certificate})`}}>
            <div
                className="flex flex-col justify-center w-full h-full px-12 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <button
                className="mb-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 border border-green-500 hover:border-green-600"
                type="button"
                onClick={() => setPopUp(true)}
                >
                Show
                </button>
            </div>
        </div>
      </div>

      {popUp && <CertificateModal setPopUp={setPopUp} />}

      <div className='mt-8'>
        <Footer/>
      </div>
    </>
  )
}

export default AboutUsPage