import React from 'react'

const Content = () => {
    const change = () =>{
        const greetings = ["Hey", "Hi", "Hello", "Welcome"];
        const n = Math.floor(Math.random()*4);
        return greetings[n];
     }
  return (
    <p>
      Content {change()}
    </p>
  )
}

export default Content
