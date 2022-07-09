import React from 'react';
import '../styles/Modal.css'
import CloseIcon from '@mui/icons-material/Close';

const Modal2 = ({children, closeModal, isOpen}) => {
    
    return (
        <article className={`modal ${isOpen && "is-open"}`}>
            <div className="modal-container" >
                <button onClick={closeModal} className='modal-close'><CloseIcon /></button>
                {children}
                
            </div>
        </article>
    );
};

export default Modal2;