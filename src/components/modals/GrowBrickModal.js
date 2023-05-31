import React from 'react'

export default function GrowBrickModal({setPopUp4}) {
  return (
    <div>
        <div className='bg-black bg-opacity-80 z-50 fixed top-0 right-0 flex justify-center items-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full'>
            <div className='relative w-full max-w-2xl max-h-full'>
                <div className='relative bg-white p-8 rounded-md shadow-md'>
                    <h1 className='font-bold text-center text-4xl my-8'>Grow Bricks</h1>
                    <p className='font-semibold text-start text-xl my-2'>
                    Grow bricks are normally produced with coco pith by compressing into moulds with 8:1 compression ratio.
                    </p>
                    <ul className='list-disc mx-4 font-semibold text-left text-4sm my-2'>
                        <li>Base Materials: Coir Pith (Coco peat)</li>
                        <li>Dimension of the Pack: L= 200 mm, W= 100 mm, H= 50 mm +/- 30</li>
                        <li>Dry Weight per Bale: 650g</li>
                        <li>Moisture content (w/w): 15% – 20%</li>
                        <li>Loadability: 12.5 tons per 20 ft. container</li>
                        <li>Packaging: Can offer with customized labeling</li>
                        <li>Material: Buffered, Washed, Non washed</li>
                        <li>Outturn: 9+ Liters</li>
                    </ul>
                    <div className='flex justify-end mt-5'>
                        <button className='outline outline-1 outline-[#101f20] bg-[#101f20] text-white py-2 px-4 hover:bg-transparent hover:text-black'
                        onClick={() => setPopUp4(false)}
                        >Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
