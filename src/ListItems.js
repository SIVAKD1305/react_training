import React from 'react';

function ListItems(props) {
  return (
    <div>
      <ul>
        {props.items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => props.handelChange(item.id)}
            />
            <label
              style={item.checked ? { textDecoration: "line-through" } : null}
            >
              {item.todo}
            </label>
            <button onClick={() => props.handleDelete(item.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListItems;
