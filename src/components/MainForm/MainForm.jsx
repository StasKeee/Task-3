import Form from "./Form";

const MainForm = ({setComps}) => {

    const addCard = (state) => {

        setComps((prev)=>{
    
            let lastComp = prev.length > 0 ? prev[prev.length-1] : null;
    
            let lastId;
            
            if (lastComp) {
                lastId = lastComp.id
            }
           
            return [
                ...prev, {...state, id: lastId >= 0 ? lastId + 1 : 0}
            ]
    
        });
    }

    return ( 
        <div id="main" className="head">
            <h2 className="title">Добавить компетенцию</h2>
            <Form addCard={addCard} />
        </div>
     );
}
 
export default MainForm;