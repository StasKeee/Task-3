import PercentList from "./PercentList";
import Button from "../buttons/Button";

const Filtration = ({active, setActive, filterProp, setFilterProp}) => {

    const changeFilterProp = (e) =>{ 
        setFilterProp(e.target.value)
    }

    const showCards = () => {
        setActive((prev)=>{return !prev})
    }

    return ( 
        <div className="head_list">
            <h3 className="title-list">Список компетенций</h3>
            <PercentList filterProp={filterProp} changeFilterProp={changeFilterProp} />
            <Button content={active ? "Скрыть компетенции" : "Показать комппетенции"} onClick={showCards} className={"btn-show"} />
        </div>
     );
}
 
export default Filtration;