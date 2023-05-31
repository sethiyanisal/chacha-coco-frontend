import React from 'react'

function HuskChipModal({setPopUp2}) {
  return (
    <div>
        <div className='bg-black bg-opacity-80 z-50 fixed top-0 right-0 flex justify-center items-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full'>
            <div className='relative w-full max-w-2xl max-h-full'>
                <div className='relative bg-white p-8 rounded-md shadow-md'>
                <h1 className='font-bold text-center text-4xl my-8'>Husk Chips</h1>
                <p className='font-semibold text-center text-xl my-2'>
                Matured dry coconut husks can be cut into small pieces with specific dimensions or can be chopped into pieces. These husk chips will be formed a cube shape or irregularly shape and available in different sizes to suit different applications. These are mainly used in grow bag industry as a growing media and also used as potting medium for orchids and similar cut-plants. Husk chips have the capacity to absorb more water and have good water retention capacity to avoid water evaporation.
                </p>
                <div className='flex justify-end mt-5'>
                    <button className='outline outline-1 outline-[#101f20] bg-[#101f20] text-white py-2 px-4 hover:bg-transparent hover:text-black'
                    onClick={() => setPopUp2(false)}
                    >Close</button>
                </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default HuskChipModal