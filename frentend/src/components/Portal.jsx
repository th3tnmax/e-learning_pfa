import { useState } from 'react';
import { createPortal } from 'react-dom';
import Adduser from '../pages/Adduser';



const Portal = () => {
    const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button className='btn bg-teal-600' onClick={() => setShowModal(true)}>
        Show modal using a portal
      </button>
      {showModal && createPortal(
        <Adduser onClose={() => setShowModal(false)} />,
        document.body
      )}
    </>
  )
}

export default Portal
