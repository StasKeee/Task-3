const InputName = ({state, onInputChange, errors}) => {
    return ( 
    <input
        value={state.name}
        data-name="name"
        type="text"
        className={errors.name ? "form__overview active" : "form__overview"}
        placeholder={errors.name ? "Поле ввода не должно быть пустым" : "Название навыка"}
        id="newItemText"
        onChange={onInputChange}
    />
     );
}
 
export default InputName;