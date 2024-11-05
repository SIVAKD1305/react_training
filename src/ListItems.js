import React from 'react'

function ListItems(props) {
    
  return (
    <div>
      <ul>
      {props.items.map(
        (item) => (
          <li>
            <input type="checkbox" checked={item.checked} 
            key={item.id} onChange={()=>props.handelChange(item.id)}
            />
            <label 
            style={
              item.checked ? {textDecoration:"line-through"} : null
              }
              >{item.todo}</label>
            <button key={item.id} 
            onClick={()=>props.handleDelete(item.id)}>Delete</button>
          </li>
        )
      )}
    </ul>
    <p>{props.handelDelete}</p>
    </div>
  )
}

export default ListItems
