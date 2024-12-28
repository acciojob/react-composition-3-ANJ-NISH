import React, { useState } from 'react';

export const Tooltip=({text, children})=>
{
   
   const [show, setShow]=useState(false);

  return (
    <>
      {show && <div style={{backgroundColor: 'red', color: 'white',fontWeight: '700', height: '80px', width: '100px', 
       position: 'absolute', top: '20px',
      }}>{text}</div>}
      <div onMouseOut={()=> setShow(false)} onMouseOver={()=>setShow(true)} style={{marginTop: '100px'}}>{children}</div>
    </>
  )
}