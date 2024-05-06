import { useState } from "react";

import InputForm from "../inputs/InputForm";
import TextareaForm from "../textareas/TextareaForm";
import ButtonSubmit from "../buttons/Button";
import validation from "../validation/validation";
import { defaultValue } from "../constants/defaultValue";


const Form = ({addCard}) => {

    const [state, setState] = useState(defaultValue);
    const [errors, setErrors] = useState(defaultValue);

    
    const onInputChange = (key) => (e) => {
        setState((prev)=>{return {...prev, [key]: e}});
    };



    const handleSubmit = (e) => {
            e.preventDefault();

            let result = true;

            Object.entries(state).forEach(([key, value])=>{
                if (!validation(key, value)) {
                    setErrors((prev)=>{return {...prev, [key]: true}})
                    result = false;
                    setState((prev)=>{return {...prev, [key]: ''}})
                    console.log(state)
                }
            });

            if (result) {
                addCard(state);
                setState(defaultValue);
                setErrors(defaultValue);
            }
        };



    return (
            <form className="form" onSubmit={handleSubmit}>
                <InputForm propsValue={state.name} onChangeForm={onInputChange('name')} className={errors.name ? "active" : ""} placeholder={errors.name ? "Поле ввода не должно быть пустым" : "Название навыка"}  />
                <TextareaForm propsValue={state.overview} onChangeForm={onInputChange('overview')} className={errors.overview ? "active" : ""} placeholder={errors.overview ? "Поле ввода не должно быть пустым" : "Описание навыка"} />
                <InputForm propsValue={state.percent} onChangeForm={onInputChange('percent')} className={errors.percent ? "active" : ""} placeholder={errors.percent ? "Значние от 0 до 100" : "Процент владения"} />
                <ButtonSubmit content={"Добавить"} type={"submit"} />
            </form>
    )
}
 
export default Form;