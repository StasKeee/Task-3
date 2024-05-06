import CardMaker from "./CardMaker";

const CardContainer = ({array, setCardToChange, setComps, modal}) => {
    
    const openModal = (obj) => {
        setCardToChange(obj);
        modal.current.classList.add('active');
    };

    const deleteProduct = (id) => {
        setComps((prev)=>{
        return prev.filter((card)=>{return id!== card.id})
        })
    }

    const renderedCards = array.map((item)=>{ return <CardMaker key={item.id} obj={item} deleteProduct={deleteProduct}  openModal={openModal} />
    })
    
    return (
        <div className="container">
            {renderedCards}
        </div>
    )

}
 
export default CardContainer;