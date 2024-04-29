const InputPercentModal = ({stateModal, onInputChangeModal, errors}) => {
    return ( 
        <input
            value={stateModal.percent}
            data-name="percent"
            type="nubmer"
            className={errors.percent ? "form-control active" : "form-control"}
            placeholder={errors.percent ? "0-100" : "Процент владения"}
            id="newItemText"
            onChange={onInputChangeModal}
        />
     );
}
 
export default InputPercentModal;