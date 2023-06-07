import React, {useState} from 'react'
import NavBar from '../components/NavBar'
import Certificate from '../images/BR_Certificate.png'
import CertificateModal from '../components/modals/CertificateModal'
import Footer from '../components/Footer'

const CertificatesPage = () => {

  const [popUp, setPopUp] = useState(false);

  return (
    <>
        <NavBar/>

        <div>
        <h1 className="text-2xl md:text-3xl xl:text-4xl mx-12 text-center font-bold text-green-500 tracking-tight mb-12 mt-12">Business Registration Certificate<br />
        </h1>
      </div>

      <div className="flex flex-wrap justify-center gap-12 mt-8 xl:mt-12">
        <div className="overflow-hidden bg-cover bg-center rounded-lg cursor-pointer w-96 h-96 group"
            style={{backgroundImage:`url(${Certificate})`}}>
            <div
                className="flex flex-col justify-center w-full h-full px-12 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                <button
                className="mb-2 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 border border-green-500 hover:border-green-600"
                type="button"
                onClick={() => setPopUp(true)}
                >
                Show
                </button>
            </div>
        </div>
      </div>

      {popUp && <CertificateModal setPopUp={setPopUp} />}

      <div className='mt-8'>
        <Footer/>
      </div>
    </>
  )
}

export default CertificatesPage