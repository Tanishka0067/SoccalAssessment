import React from 'react'
import { RotatingLines } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className='p-14 mx-auto w-max'>   
    <RotatingLines
      strokeColor="grey"
      strokeWidth="5"
      animationDuration="0.75"
      width="96"
      visible={true}
    />
    </div>
  )
}

export default Loader
