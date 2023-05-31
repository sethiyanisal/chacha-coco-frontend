import React from 'react'

function CocoPithModal({setPopUp1}) {
    return (
      <div className='bg-black bg-opacity-80 z-50 fixed top-0 right-0 flex justify-center items-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full'>
        <div className='relative w-full max-w-2xl max-h-full'>
        <div className='relative bg-white p-8 rounded-md shadow-md'>
          <h1 className='font-bold text-center text-4xl my-8'>Coco Fibre Pith</h1>
          <p className='font-semibold text-center text-xl my-2'>
          Coconut husk consists of coir fibre and coir pith which also known as coco peat. Coir fibre bound together by coir pith and while extracting coir fibre from coconut husks, coir pith also separated simultaneously. This mulch like material, high in air porosity and water holding capacity, is an ideal natural growing medium for plants. Coir pith mainly used in grow bag industry and as grow blocks or grow bricks
          </p>
          <div className='flex justify-end mt-5'>
            <button className='outline outline-1 outline-[#101f20] bg-[#101f20] text-white py-2 px-4 hover:bg-transparent hover:text-black'
            onClick={() => setPopUp1(false)}
            >Close</button>
          </div>
        </div>
        </div>
      </div>
    )
  }
  
  export default CocoPithModal