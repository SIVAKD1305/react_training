import React from 'react'

function AddItem(props) {
  return (
    <div>
        <form onSubmit={props.handleSubmit}>
        <label>AddTodo</label>
        <input aria-label='AddTodo' 
        placeholder='AddTODO'
        autoFocus
        required
        value={props.newItem}
        onChange={
        (e) => {props.setNewItem(e.target.value)}
        }/>
        <button type='submit'
        > Add </button>
        </form>
    </div>
  )
}

export default AddItem
