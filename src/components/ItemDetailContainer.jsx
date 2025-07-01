import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail'; // Asegúrate de que la ruta esté bien
import LoaderComponent from './LoaderComponent';
import { useParams } from 'react-router-dom';
import { collection, doc, getDoc } from 'firebase/firestore'
import { db } from "../service/firebase";

const ItemDetailContainer = () => {
    const [detalle, setDetalle] = useState({})
    const {id} = useParams()
    const [loading, setLoading] = useState(false)
    const [invalid, setInvalid]= useState(false)

    useEffect(()=>{
        setLoading(true)
        const productsCollection= collection(db, "remeras")
        const docRef= doc(productsCollection, id)

        getDoc(docRef)
        .then((res)=>{
            if(res.data()){
                setDetalle({...res.data(), id:res.id})
            }else{
                setInvalid(true)
            }
        })
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[])

    if(invalid){
        return(
            <div>
                <h2>El producto no existe! 😅</h2>
                <Link className='btn btn-dark'>Volver a Home</Link>
            </div>
        )
    }
    return (
        <>
            {loading ? <LoaderComponent/> :
            <div>
                <ItemDetail detalle={detalle} />
            </div>}
        </>
    );
};

export default ItemDetailContainer;
