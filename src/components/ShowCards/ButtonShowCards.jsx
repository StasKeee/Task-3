const ButtonShowCards = ({active, showClick}) => {
    return ( 
    <div className="btn-show">
        <button onClick={showClick}>{active ? "Скрыть компетенции" : "Показать компетенции"}</button>
    </div>
     );
}
 
export default ButtonShowCards;