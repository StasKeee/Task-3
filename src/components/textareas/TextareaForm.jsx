import { useState } from "react";

const TextareaForm = ({propsValue, onChangeForm, className, placeholder, ...props}) => {

    const [value, setValue] = useState(propsValue);

    const myOnChange = (e) => {
        setValue(e.target.value);
        onChangeForm(e.target.value);
    }

    return ( 
        <textarea
            value={propsValue}
            onChange={myOnChange}
            className={className}
            placeholder={placeholder}
            {...props}
        />
     );
}
 
export default TextareaForm;