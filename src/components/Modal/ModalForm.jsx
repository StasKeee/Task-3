import { useState, useEffect } from "react";

import InputForm from "../inputs/InputForm";
import TextareaForm from "../textareas/TextareaForm";
import Button from "../buttons/Button";
import validation from "../Validation/validation";

const defaultValue = {
    name: '',
    overview: '',
    percent: ''
}

const ModalForm = ({card, closeModal, saveChanges}) => {

    const [stateModal, setStateModal] = useState(defaultValue);
    const [errors, setErrors] = useState(defaultValue);

    useEffect(()=>{
        setStateModal({...card})
    }, [card]);



    const onInputChange = (key) => (e) => {
        setStateModal((prev)=>{return {...prev, [key]: e}});
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
            closeModal();
        }

    };


    return ( 
        <form className={""} onSubmit={handleSubmitModal} >
            <InputForm propsValue={stateModal.name} onChangeForm={onInputChange('name')} className={errors.name ? "active" : ""} placeholder={errors.name ? "Поле ввода не должно быть пустым" : "Название навыка"} />
            <TextareaForm propsValue={stateModal.overview} onChangeForm={onInputChange('overview')} className={errors.overview ? "active" : ""} placeholder={errors.overview ? "Поле ввода не должно быть пустым" : "Описание навыка"} />
            <InputForm propsValue={stateModal.percent} onChangeForm={onInputChange('percent')} className={errors.percent ? "active" : ""} placeholder={errors.percent ? "Значнеие от 0 до 100" : "Процент владения"} />
            <div className="btn_container">
                <Button content={"Сохранить"} type={"submit"} />
                <Button content={"Отмена"} onClick={closeModal} />
            </div>
        </form>
     );
}
 
export default ModalForm;