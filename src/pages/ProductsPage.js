import React from 'react'
import { useState } from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import CocoPithModal from '../components/modals/CocoPithModal'
import HuskChipModal from '../components/modals/HuskChipModal'
import GrowBlockModal from '../components/modals/GrowBlockModal'
import GrowBrickModal from '../components/modals/GrowBrickModal'
import GrowBagModal from '../components/modals/GrowBagModal'

import ProductTable from '../components/ProductTable'
import PropertyList from '../components/PropertyList'
import MixtureTable from '../components/MixtureTable'

import ProductBanner from '../images/Product_Banner.jpg'
import CocoPith from '../images/Products/Coco_Fibre_Pith.jpg'
import HuskChips from '../images/Products/Husk_Chips.png'
import GrowBlock from '../images/Products/Grow_Block.jpeg'
import GrowBrick from '../images/Products/Grow_Brick.jpeg'
import GrowBag from '../images/Products/Grow_Bag.jpeg'
import { Helmet } from 'react-helmet-async'


const ProductsPage = () => {

  const [popUp1, setPopUp1] = useState(false);
  const [popUp2, setPopUp2] = useState(false);
  const [popUp3, setPopUp3] = useState(false);
  const [popUp4, setPopUp4] = useState(false);
  const [popUp5, setPopUp5] = useState(false);

  return (
    <>
    <Helmet>
      <title>Chacha Coco - Product Page</title>
      <meta name='description' content='We manufacture range of coconut husk based products to the local and export market.'/>
      <link rel='canonical' href='/Products'/>
    </Helmet>
    
        <NavBar/>
        
        <section className="mb-12">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="mt-0 svg absolute hidden lg:block"
            style={{height: "560px", width: "100%", zIndex: -10, overflow: 'hidden'}}
          >
            <defs>
              <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
                <stop stop-color="hsl(217, 102%, 99%)" offset="0%"></stop>
                <stop stop-color="#9BFFAD" offset="100%"></stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#sw-gradient-0)"
              d="M 0.351 264.418 C 0.351 264.418 33.396 268.165 47.112 270.128 C 265.033 301.319 477.487 325.608 614.827 237.124 C 713.575 173.504 692.613 144.116 805.776 87.876 C 942.649 19.853 1317.845 20.149 1440.003 23.965 C 1466.069 24.779 1440.135 24.024 1440.135 24.024 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L 0.351 264.418 Z"
            ></path>
          </svg>

          <div className="px-6 py-12 lg:my-4 md:px-12 text-gray-800 text-center lg:text-left">
            <div className="container mx-auto xl:px-32">
              <div className="grid lg:grid-cols-2 gap-12 flex items-center">
                <div className="mt-12 lg:mt-0">
                  <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight mb-12">Our Products<br /><span className="text-gray-400">Matching to your requirements</span></h1>
                  <div className="md:flex flex-row">
                    <a className='' href="./AboutUs">
                      <button className=" mt-2 mr-2 mb-2 hover:bg-green-600 text-green-500 hover:text-white font-bold py-3 px-8 border border-green-500 hover:border-green-600">
                        About Us
                      </button>
                    </a>
                  </div>
                </div>
                <div className="mb-12 lg:mb-0">
                  <div
                    className="embed-responsive embed-responsive-16by9 relative w-full overflow-hidden rounded-lg shadow-lg"
                  >
                    <img src={ProductBanner} alt='Product Banner'/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white">
          <div className="container px-6 py-4 mx-auto">
              <h1 className="text-3xl font-bold text-center text-green-500 capitalize lg:text-5xl xl:text-6xl">Our Product Varieties
              </h1>

              <p className="mt-8 text-center text-base lg:text-xl font-semibold px-12 text-gray-600">
                We manufacture range of coconut husk based products to the local and export market. 
                As we used only matured dry coconut husks without chemical treatments, our products are high quality, environment friendly and 100 % biodegradable. 
                Further our products enhance the root formation of plants and crops with high water holding capacity and air filled porosity. 
                We ensure the environmental sustainability of agricultural lands as well.
                We proudly introduce the following range of key products manufactured with matured coconut husk for the use of agricultural and horticulture industries.
              </p>


              <div className="flex flex-wrap justify-center gap-12 mt-8 xl:mt-12">
                  <div className="overflow-hidden bg-cover bg-center rounded-lg cursor-pointer w-96 h-96 group"
                      style={{backgroundImage:`url(${CocoPith})`}}>
                      <div
                          className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                          <h2 className="text-xl font-semibold text-white capitalize">Coco Fibre Pith</h2>
                          <button
                            className="mb-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 border border-green-500 hover:border-green-600"
                            type="button"
                            onClick={() => setPopUp1(true)}
                          >
                            Read More
                          </button>
                      </div>
                  </div>

                  <div className="overflow-hidden bg-cover bg-center rounded-lg cursor-pointer w-96 h-96 group"
                      style={{backgroundImage:`url(${HuskChips})`}}>
                      <div
                          className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                          <h2 className="mt-4 text-xl font-semibold text-white capitalize">Husk Chips</h2>
                          <button
                            className="mb-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 border border-green-500 hover:border-green-600"
                            type="button"
                            onClick={() => setPopUp2(true)}
                          >
                            Read More
                          </button>
                      </div>
                  </div>

                  <div className="overflow-hidden bg-cover bg-center rounded-lg cursor-pointer w-96 h-96 group"
                      style={{backgroundImage:`url(${GrowBlock})`}}>
                      <div
                          className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                          <h2 className="mt-4 text-xl font-semibold text-white capitalize">Grow Blocks </h2>
                          <button
                            className="mb-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 border border-green-500 hover:border-green-600"
                            type="button"
                            onClick={() => setPopUp3(true)}
                          >
                            Read More
                          </button>
                      </div>
                  </div>

                  <div className="overflow-hidden bg-cover bg-center rounded-lg cursor-pointer w-96 h-96 group"
                      style={{backgroundImage:`url(${GrowBrick})`}}>
                      <div
                          className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                          <h2 className="mt-4 text-xl font-semibold text-white capitalize">Grow Bricks </h2>
                          <button
                            className="mb-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 border border-green-500 hover:border-green-600"
                            type="button"
                            onClick={() => setPopUp4(true)}
                          >
                            Read More
                          </button>
                      </div>
                  </div>

                  <div className="overflow-hidden bg-cover bg-center rounded-lg cursor-pointer w-96 h-96 group"
                      style={{backgroundImage:`url(${GrowBag})`}}>
                      <div
                          className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                          <h2 className="mt-4 text-xl font-semibold text-white capitalize">Grow Bags </h2>
                          <button
                            className="mb-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 border border-green-500 hover:border-green-600"
                            type="button"
                            onClick={() => setPopUp5(true)}
                          >
                            Read More
                          </button>
                      </div>
                  </div>
              </div>
          </div>
        </section>

        {popUp1 && <CocoPithModal setPopUp1={setPopUp1} />}
        {popUp2 && <HuskChipModal setPopUp2={setPopUp2} />}
        {popUp3 && <GrowBlockModal setPopUp3={setPopUp3} />}
        {popUp4 && <GrowBrickModal setPopUp4={setPopUp4} />}
        {popUp5 && <GrowBagModal setPopUp5={setPopUp5} />}

      <div className='mt-8 mb-4'>
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold text-green-500 tracking-tight mb-12">Our Products<br />
        </h1>
        <h2 className="text-2xl mx-32 text-left font-semibold text-gray-600 mb-8">At present we have following varities of grow bags with showing mixtures.</h2>
        <ProductTable/>
      </div>

      <div>
        <PropertyList/>
      </div>

      <div className='mt-16 mb-4'>
        <h2 className="text-2xl lg:mx-32 xl:mx-32 mx-16 text-left font-semibold text-gray-600 mb-8">Water holding capacity & air-filled porosity range of specific mixtures.</h2>
        
        <MixtureTable/>
        
        <h2 className="text-lg lg:mx-32 xl:mx-32 mx-16 text-center font-semibold text-gray-800 mb-8">PH level 5.7 -6.7 & Electrical Conductivity (EC) level 0.5 to 1.2
        No added chemicals or chemical treatments and Iron Exchange property remains naturally.
        </h2>
      </div>

      <div className='mt-12 mb-4'>
        <h2 className="text-2xl lg:mx-32 xl:mx-32 mx-16 text-left font-bold text-gray-800 mb-8">
        Crops can grow with our products
        </h2>

        <p className="text-xl lg:mx-32 xl:mx-32 mx-16 text-left font-semibold text-gray-600 mb-20">Water melon, capsicum, yellow/red /green pepper, bell pepper, tomatoes, gherkin, lettuce, cabbage, strawberry and blue berry, Chile etc.</p>
      </div>

      <div className='mt-8'>
        <Footer/>
      </div>
    </>
  )
}

export default ProductsPage