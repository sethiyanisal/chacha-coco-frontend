import React from 'react'
import Certificate from '../../images/BR_Certificate.png'

export default function CertificateModal({setPopUp}) {
  return (
    <div className='bg-black bg-opacity-80 z-50 fixed top-0 right-0 flex justify-center items-center w-full overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full'>
        <div className='relative w-auto h-screen max-h-screen'>
        <div className='bg-cover bg-center rounded-lg shadow-md'>
            <img src={Certificate} alt='BR Certificate'/>
          <div className='absolute right-0 top-0'>
            <button className='outline outline-1 outline-[#101f20] bg-[#101f20] text-white py-2 px-4 hover:bg-transparent hover:text-black'
            onClick={() => setPopUp(false)}
            >X</button>
          </div>
        </div>
        </div>
      </div>
  )
}
