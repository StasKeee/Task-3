import {useState, forwardRef, useEffect} from 'react';

import InputNameModal from './InputNameModal';
import InputOverviewModal from './InputOverviewModal';
import InputPercentModal from './InputPercentModal';
import ButtonSave from './ButtonSave';
import ButtonClose from './ButtonClose';
import validation from '../Validation/validation';
import './css/modal.css';

const defaultValue = {
    name: '',
    overview: '',
    percent: ''
};


const Modal = forwardRef (({card, saveChanges, closeModal, closeModalOut}, ref) => {

    const [stateModal, setStateModal] = useState(defaultValue);
    const [errors, setErrors] = useState(defaultValue);

   
    useEffect(()=>{
        setStateModal({...card})
    }, [card])
    
    
    const onInputChangeModal = (e) => {
        setStateModal({...stateModal, [e.target.dataset.name]: e.target.value});
    };

    const handleSubmitModal = (e) => {
            e.preventDefault();

            let result = true;

            Object.entries(stateModal).forEach(([key, value])=>{
                if (!validation(key, value)) {
                    setErrors((prev)=>{return {...prev, [key]: true}})
                    result = false;
                    setStateModal((prev)=>{return {...prev, [key]: ''}})
                }
            });


            if (result) {
                saveChanges(stateModal);
                setStateModal(defaultValue);
                setErrors(defaultValue);
                closeModal(e);
            }


    };



    return ( 
            <div className="modal-overlay" onClick={closeModalOut} ref={ref}>
                <div className="modal">
                    <h2 className="modal__head">Редактирование карточки</h2>
                    <div>
                        <form onSubmit={handleSubmitModal} >
                            <InputNameModal stateModal={stateModal} onInputChangeModal={onInputChangeModal} errors={errors} />
                            <InputOverviewModal stateModal={stateModal} onInputChangeModal={onInputChangeModal} errors={errors} />
                            <InputPercentModal stateModal={stateModal} onInputChangeModal={onInputChangeModal} errors={errors} />
                            <div className="btn_container">
                                <ButtonSave />
                                <ButtonClose closeModal={closeModal}/>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
     );
});


 
export default Modal;