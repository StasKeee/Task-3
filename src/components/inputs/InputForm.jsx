import { useState } from 'react';

const InputForm = ({propsValue, onChangeForm, className, placeholder, ...props}) => {

    const [value, setValue] = useState(propsValue);

    const myOnChange = (e) => {
        onChangeForm(e.target.value);
        setValue(e.target.value)
    }

    return ( 
        <input
            value={propsValue}
            onChange={myOnChange}
            className={className}
            placeholder={placeholder}
            {...props}
        />
     );
}
 
export default InputForm;