import React ,{useState}from 'react'
import Pricing from './Pricing'
import { createPortal } from 'react-dom';
import BackButton from '../BackButton';
import Spinner from '../Spinner';

const PriceModal = () => {
  const [showModal, setShowModal] = useState(false);
  const handelOnClose =(e)=>{
    if (e.target.id === 'modelcontainer') {
        onClose()
    }
    
};
const [loading, setloading] = useState(false)
  return (
   
     <>

    
      <button className='btn bg-teal-600' onClick={() => setShowModal(true)}>
        Show modal using a portal
      </button>
        
        <div className="my-4">
        {showModal && createPortal(
        <Pricing onClose={() => setShowModal(false)} />,
        document.body
      )}
        </div>
        


        
       </>
       
      
   
  )
}

export default PriceModal
