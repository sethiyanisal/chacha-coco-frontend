import React from 'react'
import NavBar from '../components/NavBar'
import Banner1 from '../images/Banner1.jpg'
import Banner2 from '../images/Banner2.jpg'
import HomePageCard from '../components/HomePageCard'

const HomePage = () => {
  return (
    <>
      <NavBar/>

      <div
          className="relative text-center text-white font-popins bg-cover bg-center h-screen brightness-50"
          style={{ backgroundImage: `url(${Banner1})` }}
      ></div>
      
      <div>
        <HomePageCard/>
      </div>

      <div className="mx-4 my-8">
        <h1 className="text-center text-5xl text-green-500 leading-loose tracking-widest px-4">
          About CHACHÅ COCO
        </h1>
        <hr className="w-1/4 mx-auto bg-gray-900" />
      </div>

      <div className="grid justify-items-center mx-4 my-8">
        <p className="text-xl w-2/3">
          We proudly introduce you newly opened Sri Lankan company that is 
          doing a production of high-quality coco grow bags under the registered brand name ChaCha coco. 
          Our products are high quality because raw materials such as coco peat and coconut husk chips are obtained from the first coconut triangle in Sri Lanka.
        </p>
        <p className="mt-4 text-xl w-2/3">
        Kurunegala,	Puttalam	and
        Gampaha districts are the first coconut triangle and it's consisting the largest coconut plantations in Sri Lanka. Kurunegala district consisting
        550,958	acres,	Puttalam
        districts	consisting	115,895
        acres and Gampaha district consisting 106,576 acres' coconut plantations. 
        In these three districts annual coconut harvest is 5000 million nuts. Our factory is situated in middle of Kurunegala District Kuliyapitiya, Deegalla and regularly we are rich with high quality cocopeat and husk chips.
        </p>
        <a href="./AboutUs">
            <button className=" mt-8 mr-2 mb-2 hover:bg-green-600 text-green-500 hover:text-white font-bold py-3 px-8 border border-green-500 hover:border-green-600">
              READ MORE
            </button>
          </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex flex-col">
          <div className="flex-1">
          <img className='h-full' src={Banner2} alt='Coco Peat'></img>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex-1 bg-slate-600 text-start">
              <div className=" pt-24 pl-16 md:text-3xl lg:text-5xl text-white font-medium">
                Our Products
              </div>
              <p className='leading-loose md:text-sm lg:text-base lg:w-3/4 text-white mt-16 ml-16'> 
              At 'CHACHA COCO', we pride ourselves on being a leading exporter of high-quality coco peat products. 
              With a commitment to sustainability and superior quality, we offer a range of coco peat solutions that cater to 
              the diverse needs of our global clientele. Our dedication to customer satisfaction, reliable sourcing, and eco-friendly 
              practices sets us apart as a trusted partner in the coco peat industry.
              </p>

            <a className='mt-16 pl-16' href="./AboutUs">
              <button className=" mt-16 mr-2 mb-2 hover:bg-green-600 text-green-500 hover:text-white font-bold py-3 px-8 border border-green-500 hover:border-green-600">
                READ MORE
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage