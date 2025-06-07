import React, { useState } from 'react'

function InputSearch() {
    const [value, setValue] = useState('')

    const inputHandler = (e) =>{
        setValue(e.target.value)
    }
    return (
        <>
        <div>
            <input placeholder='Buscar producto 'type="text" name='nombre producto' onChange={inputHandler}/>
            <p>{value}</p>
        </div>
        </>
    )
}

export default InputSearch