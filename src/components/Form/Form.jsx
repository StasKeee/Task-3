import { useState } from "react";

import InputName from "./InputName"; 
import InputOverview from "./InputOverview";
import InputPercent from "./InputPercent";
import ButtonSubmit from "./ButtonSubmit";
import validation from "../Validation/validation";


const defaultValue = {
    name: '',
    overview: '',
    percent: ''
};

const Form = ({addCard}) => {

    const [state, setState] = useState(defaultValue);
    const [errors, setErrors] = useState(defaultValue);


      
    const onInputChange = (e) => {
        setState({...state, [e.target.dataset.name]: e.target.value});
    };

      const handleSubmit = (e) => {
            e.preventDefault();

            let result = true;

            Object.entries(state).forEach(([key, value])=>{
                if (!validation(key, value)) {
                    setErrors((prev)=>{return {...prev, [key]: true}})
                    result = false;
                    setState((prev)=>{return {...prev, [key]: ''}})
                }
            })

            if (result) {
                addCard(state);
                setState(defaultValue);
                setErrors(defaultValue);
            }
    };

    return ( 
        <form onSubmit={handleSubmit} id="addForm" className="form">
            <InputName state={state} onInputChange={onInputChange} errors={errors} />
            <InputOverview state={state} onInputChange={onInputChange} errors={errors}  />
            <InputPercent state={state} onInputChange={onInputChange} errors={errors}  />
            <ButtonSubmit />
        </form>
     );
}
 
export default Form;