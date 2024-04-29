const InputOverview = ({state, onInputChange, errors}) => {

    return ( 
    <textarea
        value={state.overview}
        data-name="overview"
        type="text"
        className={errors.overview ? "form__overview active" : "form__overview"}
        placeholder={errors.overview ? "Поле ввода не должно быть пустым" : "Описание навыка"}
        id="newItemText"
        onChange={onInputChange}
    />
     );
}
 
export default InputOverview;