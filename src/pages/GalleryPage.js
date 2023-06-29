import React from 'react'
import NavBar from '../components/NavBar'
import CocoPith from '../images/Products/Coco_Fibre_Pith.jpg'
import HuskChips from '../images/Products/Husk_Chips.png'
import GrowBlock from '../images/Products/Grow_Block.jpeg'
import GrowBrick from '../images/Products/Grow_Brick.jpeg'
import GrowBag from '../images/Products/Grow_Bag.jpeg'
import Footer from '../components/Footer'
import { Helmet } from 'react-helmet-async'

const GalleryPage = () => {
  return (
    <>
    <Helmet>
      <title>Chacha Coco - Gallery Page</title>
      <meta name='description' content='CHACHA COCO Photo Gallery'/>
      <link rel='canonical' href='/Gallery'/>
    </Helmet>
        <NavBar/>

        <div class="container mx-auto px-5 py-2 lg:px-32 lg:pt-12">
          <div class="m-1 flex flex-wrap md:m-2">
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={CocoPith} />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={HuskChips} />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={GrowBlock} />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={GrowBrick} />
              </div>
            </div>
            <div class="flex w-1/3 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-lg object-cover object-center"
                  src={GrowBag} />
              </div>
            </div>
          </div>
        </div>

        <div className='mt-8'>
          <Footer/>
      </div>
    </>
  )
}

export default GalleryPage