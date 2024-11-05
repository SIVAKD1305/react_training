import React from 'react'
import { useState } from 'react';
const Content = () => {
    const [items, setItems] = useState([
      {
        id:1,
        todo:"Todo1",
        checked:true
      },
      {
        id:2,
        todo:"Todo2",
        checked:false
      },
      {
        id:3,
        todo:"Todo3",
        checked:false
      }
    ]);
    const handelChange = (id) => {
      const listItems = items.map((item) => 
        id === item.id ? {...item, checked:!item.checked} : item )
      setItems(listItems)
      console.log(listItems, id)
    };
    const handleDelete = (id) => {
      const listItems = items.filter((item) => id !== item.id)
      setItems(listItems)
    }
  return (
    <>
    {items.length ? (
      <ul>
      {items.map(
        (item) => (
          <li>
            <input type="checkbox" checked={item.checked} 
            key={item.id} onChange={()=>handelChange(item.id)}
            />
            <label 
            style={
              item.checked ? {textDecoration:"line-through"} : null
              }
              >{item.todo}</label>
            <button key={item.id} 
            onClick={()=>handleDelete(item.id)}>Delete</button>
          </li>
        )
      )}
    </ul>
    ) : <p>Your List is Empty</p>}
      
    </>
  )
}

export default Content
