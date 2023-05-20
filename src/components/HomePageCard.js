import React from 'react'

const HomePageCard = () => {
  return (
    <>
        <div className=" px-10 -translate-x-1/2 -translate-y-1/2 absolute text-center text-white left-1/2 top-3/4 md:top-2/3">
          <h1>
            <span className="text-5xl pb-4 font-medium tracking-wide">
            CHACHÅ COCO
            </span>
          </h1>
          <h3 className=" text-3xl pt-4 font-medium">MIHINETH ASSOCIATES (PVT) LTD</h3>

          <a to="">
            <button className=" mt-8 mr-2 mb-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 border border-green-500 hover:border-green-600">
              MORE INFO
            </button>
          </a>
        </div>
    </>
  )
}

export default HomePageCard