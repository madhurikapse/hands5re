import React from 'react'
import { useState } from 'react';
function Hoc() {
    const [count,setCount]=useState(0);

    // const incre=()=>{
        //setCount=(count+1);
    //}
  return (
    <div>
      {count}     
       <br>
      </br>
      <button className='btn1' onClick={()=>this.setCount(count+1)}> HOC INCREMENT</button>

      {/* //<button onClick={(incre)}>count</button> */}
    </div>
  )
}

export default Hoc
