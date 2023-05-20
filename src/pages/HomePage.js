import React from 'react'
import NavBar from '../components/NavBar'
import Banner from '../images/Banner1.jpg'
import HomePageCard from '../components/HomePageCard'

const HomePage = () => {
  return (
    <>
      <NavBar/>

      <div
          className="relative text-center text-white font-popins bg-cover bg-center h-screen brightness-50"
          style={{ backgroundImage: `url(${Banner})` }}
      ></div>
      
      <div>
        <HomePageCard/>
      </div>

      <div className="mx-4 my-8">
        <h1 className="text-center text-5xl text-green-500 leading-loose tracking-widest px-4">
          CHACHÅ COCO
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
        <hr className="w-1/4 mx-auto bg-gray-900" />
      </div>
    </>
  )
}

export default HomePage