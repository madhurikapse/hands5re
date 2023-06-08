import React from 'react'
import { useState } from 'react';
const Pur = () => {
   const [num,setNum ] = useState(0);
   const inc =()=>{
    setNum(num+1);
   }
   const dec =()=>{
    if(num > 0){
    setNum(num-1);
    }else{
        alert("sry only  zero limited ")
        setNum(0)
    }

   }
  return (
    <>
    <div className='main'>
<div className='center'>
    <h1>{num}</h1>
    <div className='btn'>
        <button onClick={inc}>Increment</button>
        <button onClick={dec}>Decrement</button>
    </div>
</div>
    </div>
      
    </>
  )
}

export default Pur
