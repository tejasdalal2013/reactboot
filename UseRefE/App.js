import React, { useEffect, useRef, useState } from 'react'

export default function App(){
  const[name,setName] = useState('')
  const preName = useRef()

  useEffect(()=>{
    preName.current = name
  },[name])
  return(
    <>
      <input value={name} onChange={e =>setName(e.target.value)}/>
      <div>My Name Is{name} and it used to be{preName.current}</div>
  
    </>
  )
}