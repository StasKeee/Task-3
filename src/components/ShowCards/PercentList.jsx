const PercentList = ({stateList, onChangeList}) => {
    return ( 
        <select className="selector" value={stateList} onChange={onChangeList}>
            <option disabled>Выберите уровень</option>
            <option value="all">Все</option>
            <option value="more">Компетенции с уровнем 50% и выше</option>
            <option value="less">Компетенции с уровнем ниже 50%</option>
        </select>
     );
}
 
export default PercentList;