import React from 'react'
import {PropagateLoader} from 'react-spinners'

const LoaderComponent = () => {
  return (
    <div className="w-full h-[85vh] flex justify-center items-center">
        <PropagateLoader color="#000000" />
    </div>
  )
}

export default LoaderComponent