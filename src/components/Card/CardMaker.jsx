import ButtonDelete from "./ButtonDelete";
import ButtonRedactor from "./ButtonRedactor";

const CardMaker = ({obj, deleteProduct, openModal}) => {
    return ( 
    <div className="wrapper">
        <div className="card">
            <img className="card-img" src="/ImgReact.png"></img>
            <div className="card-title">{obj.name}</div>
            <div className="card-sub">{obj.overview}</div>
            <div className="card-percent">{`Прогресс изучения ${obj.percent}%`}</div>
            <div className="btn-keeper">
                <ButtonRedactor openModal={()=>{openModal(obj)}} />
                <ButtonDelete deleteProduct={deleteProduct} id={obj.id} />
            </div>
        </div>
    </div>
     );
}
 
export default CardMaker;