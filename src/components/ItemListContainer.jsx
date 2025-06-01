import { useEffect, useState } from "react"
import { getProducts } from "../mock/productos"

const ItemListContainer = ({greeting}) =>{
    const [productos,setProductos] = useState([]);
    useEffect(()=>{
        getProducts()
        .then(request => setProductos(request))
        .catch(error => console.error(error))

    },[])

    console.log(productos);
    
    return(
        <h1>{greeting}</h1>
    )
}
export default ItemListContainer