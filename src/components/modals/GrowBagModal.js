import React from 'react'

export default function GrowBagModal({setPopUp5}) {
  return (
    <div>
        <div className='bg-black bg-opacity-80 z-50 fixed top-0 right-0 flex justify-center items-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full'>
            <div className='relative w-full max-w-2xl max-h-full'>
                <div className='relative bg-white p-8 rounded-md shadow-md'>
                    <h1 className='font-bold text-center text-4xl my-8'>Grow Bag</h1>
                    <p className='font-semibold text-start text-xl my-2'>
                    Coco pith and husk chips are mixed proportionately, compressed and put into UV resistant PE bags in order to easily used as ready-made grow bags specially in green house industry. The ratio of coco chips and coco pith will be decided based on the crop variety or customer requirements. The dimensions of the bag and labelling or brand name also can be made on customer requirements. Further number of plant holes, drainage holes, open top etc. also will be decided on customer requirements.
                    </p>
                    <ul className='list-disc mx-4 font-semibold text-left text-4sm my-2'>
                        <li>Base Materials: Coir Fibre Pith, Husk Chips or a mix of both</li>
                        <li>Dry Weight: 2.2.kg</li>
                        <li>Moisture Content:  15%-20%</li>
                        <li>Dimension: Can be customize according to requirement</li>
                        <li>Dimension (Wet):  L = 100 cm, D = 15 cm, H = 12 cm</li>
                        <li>Ex-: Length – 100cm X Width 15cm X height 12cm</li>
                    </ul>
                    <div className='flex justify-end mt-5'>
                        <button className='outline outline-1 outline-[#101f20] bg-[#101f20] text-white py-2 px-4 hover:bg-transparent hover:text-black'
                        onClick={() => setPopUp5(false)}
                        >Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
