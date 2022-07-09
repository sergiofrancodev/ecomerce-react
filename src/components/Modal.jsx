import React from 'react';
import '../styles/Modal.css'
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({children, closeModal, isOpen}) => {
    
    return (
        <article className={`modal ${isOpen && "is-open"}`}>
          
                           <h1 className='box-cart-h1'>Shopping cart</h1>
                           <button onClick={closeModal} className='modal-close'><CloseIcon /></button>
                           <div className="modal-container-cart" >
                
            
                {children}
                
            </div>
        </article>
    );
};

export default Modal;