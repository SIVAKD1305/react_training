import React from 'react'
import ListItems from './ListItems'
const Content = (props) => {
  return (
    <>
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
