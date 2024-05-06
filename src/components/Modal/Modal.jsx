import {useState, forwardRef, useEffect} from 'react';

import ModalForm from './ModalForm';
import './css/modal.css';



const Modal = forwardRef (({card, setComps}, ref) => {

    
    const closeModal = () => {
        ref.current.classList.remove('active')
    }

    const closeModalOut = (e) => {
        if (e.target.classList.contains("modal-overlay")) {
            closeModal();
        }
    };

    const saveChanges = (state) => {
        setComps((prev)=>{
            return prev.map((card)=>{
                return card.id === state.id ? state : card
            })
        })
    }


    return ( 
            <div className="modal-overlay" onClick={closeModalOut} ref={ref}>
                <div className="modal">
                    <h2 className="modal__head">Редактирование карточки</h2>
                    <ModalForm card={card} closeModal={closeModal} saveChanges={saveChanges} />
                </div>
            </div>
     );
});


 
export default Modal;