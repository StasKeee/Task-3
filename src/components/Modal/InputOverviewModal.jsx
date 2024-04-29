const InputOverviewModal = ({stateModal, onInputChangeModal, errors}) => {
    return ( 
        <textarea
            value={stateModal.overview}
            data-name="overview"
            type="text"
            className={errors.overview ? "form-control__overview active" : "form-control__overview"}
            placeholder={errors.overview ? "Поле ввода не должно быть пустым" : "Описание навыка"}
            id="newItemText"
            onChange={onInputChangeModal}
        />
     );
}
 
export default InputOverviewModal;