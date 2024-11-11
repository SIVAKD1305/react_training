import React from 'react'
import ListItems from './ListItems'
import AddItem from './AddItem'
const Content = (props) => {
  return (
    <>
    <AddItem 
    newItem = {props.newItem}
    setNewItem = {props.setNewItem}
    handleSubmit = {props.handleSubmit}
    />
    {props.items.length ? (
      <ListItems 
        items = {props.items}
        handelChange = {props.handelChange}
        handleDelete = {props.handleDelete}
      />
    ) : <p>Your List is Empty</p>}

    </>
  )
}

export default Content
