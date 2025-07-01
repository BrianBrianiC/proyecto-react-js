import { useEffect, useState } from "react"
import ItemList from "./ItemList";
import { useParams } from 'react-router-dom';
import LoaderComponent from "./LoaderComponent";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../service/firebase";

const ItemListContainer = () =>{
    const [productos,setProductos] = useState([]);
    const {categoryId} = useParams()
    const [loading,setLoading] = useState(false)

        useEffect(()=>{
                setLoading(true)
                //conectarnos con nuestra coleccion
                const productsCollection = categoryId ? query(collection(db, "remeras"), where("category", "==", categoryId)): collection(db, "remeras")
                //pedir los documentos
                getDocs(productsCollection)
                .then((res)=>{
                    //limpiar los datos para poder utilizar
                    const list = res.docs.map((doc)=>{
                        return {
                            ...doc.data(),
                            id:doc.id
                        }
                    })

                    setProductos(list)
                })
                .catch((error)=> console.log(error))
                .finally(()=> setLoading(false))
        },[categoryId])

    return(
        <>  
            {
                loading? <LoaderComponent/> :
                <div>
                    <ItemList data={productos}/>
                </div>
            }
        </>
    )
}
export default ItemListContainer