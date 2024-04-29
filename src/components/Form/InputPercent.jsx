const InputPercent = ({state, onInputChange, errors}) => {
    return ( 
        <input
            value={state.percent}
            data-name="percent"
            type="number"
            className={errors.percent ? "form__percent active" : "form__percent"}
            placeholder={errors.percent ? "0-100" : "Процент владения"}
            id="newItemText"
            onChange={onInputChange}
        />
     );
}
 
export default InputPercent;