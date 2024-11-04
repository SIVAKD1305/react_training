import React from 'react'
import { useState } from 'react';
const Content = () => {
    const change = () =>{
        const greetings = ["Hey", "Hi", "Hello", "Welcome"];
        const n = Math.floor(Math.random()*4);
        setValue(val => greetings[n]); 
     }
     const [count, setCount] = useState(0);
     const [value, setValue] = useState(() => change)
     const increment = () => {
      setCount(inc => inc+1);
     }
     const decrement = () => {
      setCount(dec => dec-1);
     }
  return (
    <>
    <p>{value} Siva</p>
    <button onClick={change}>Click to change</button>
    <br />
    <button onClick={increment}>+</button>
    <p>
      {count}
    </p>
    <button onClick={decrement}>-</button>
    </>
  )
}

export default Content
