import React from "react"

export default function GrowBlockModal({setPopUp3}) {
    return(
        <div>
            <div className='bg-black bg-opacity-80 z-50 fixed top-0 right-0 flex justify-center items-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen max-h-full'>
                <div className='relative w-full max-w-2xl max-h-full'>
                    <div className='relative bg-white p-8 rounded-md shadow-md'>
                        <h1 className='font-bold text-center text-4xl my-8'>Grow Blocks</h1>
                        <p className='font-semibold text-start text-xl my-2'>
                            Grow Blocks can be produced using only coco pith or only husk chips or mix of both pith and chips. According to customer requirements, one of above material or mix of materials put into mould and compressed to manufacture grow blocks.(Compression ratio 4:1)Grow blocks will be shipped as naked blocks or wrapped with polythene or with required packing material.
                        </p>
                        <ul className='list-disc mx-4 font-semibold text-left text-4sm my-2'>
                            <li>Base Materials: Coco Pith, Husk Chips or a mix of both</li>
                            <li>Dimension of the Pack: L= 300 mm, W= 300 mm, H= 120 mm +/- 30</li>
                            <li>Dry Weight per Bale: 5 Kg</li>
                            <li>Moisture content (w/w): 15% – 20%</li>
                            <li>Loadability: 40 ft. HC:  Floor loaded 5000 Pcs</li>
                        </ul>
                        <div className='flex justify-end mt-5'>
                            <button className='outline outline-1 outline-[#101f20] bg-[#101f20] text-white py-2 px-4 hover:bg-transparent hover:text-black'
                            onClick={() => setPopUp3(false)}
                            >Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}