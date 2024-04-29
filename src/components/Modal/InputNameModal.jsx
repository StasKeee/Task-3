const InputNameModal = ({stateModal, onInputChangeModal, errors}) => {

    return ( 
        <input
            value={stateModal.name}
            data-name="name"
            type="text"
            className={errors.name ? "form-control active" : "form-control"}
            placeholder={errors.name ? "Поле ввода не должно быть пустым" : "Назваие навыка"}
            id="newItemText"
            onChange={onInputChangeModal}
        />
     );
}
 
export default InputNameModal;
