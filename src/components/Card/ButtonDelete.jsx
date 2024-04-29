const ButtonDelete = ({deleteProduct, id}) => {
    return ( 
        <button onClick={()=>{deleteProduct(id)}} className="btn">Удалить</button>
    )
    
}
 
export default ButtonDelete;