import { useEffect, useState } from "react"
import { getProducts } from "../mock/productos"
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';

const ItemListContainer = () =>{
    const [productos,setProductos] = useState([]);
    const {categoryId} = useParams()

    useEffect(()=>{
        getProducts()
        .then(productos => {
            if(categoryId){
                setProductos(productos.filter(prod => prod.category === categoryId))
            }else{
                setProductos(productos)
            }
        })
        .catch(error => console.error(error))

    },[categoryId ])

    console.log(productos);
    
    return(
        <div>
            <ItemList data= {productos}/>
        </div>
    )
}
export default ItemListContainer