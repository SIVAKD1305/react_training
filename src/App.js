import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from 'react';
export default function App(){
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todo_list')),'');
  console.log(JSON.parse(localStorage.getItem('todo_list')))
  // const [items, setItems] = useState([
  //   {
  //     id:1,
  //     todo:"Todo1",
  //     checked:true
  //   },
  //   {
  //     id:2,
  //     todo:"Todo2",
  //     checked:false
  //   },
  //   {
  //     id:3,
  //     todo:"Todo3",
  //     checked:false
  //   }
  // ]);
  const [newItem, setNewItem] = useState('');
  const handelChange = (id) => {
    const listItems = items.map((item) => 
      id === item.id ? {...item, checked:!item.checked} : item )
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems));
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => id !== item.id)
    setItems(listItems)
    localStorage.setItem("todo_list",JSON.stringify(listItems));
  };
  const addItem = (todo) => {
    const id = items.length ? items[items.length-1].id+1 : 1;
    const addNewItem = {id,  todo, checked:false}
    const newList = [...items, addNewItem];
    setItems(newList)
    localStorage.setItem("todo_list",JSON.stringify(newList));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem)
  }
  return(
    <div className="App">
      <Header  />
      <Content 
      items = {items}
      handelChange = {handelChange}
      handleDelete = {handleDelete}
      newItem = {newItem}
      setNewItem = {setNewItem}
      handleSubmit = {handleSubmit}
      />
      <Footer
      length = {items.length}
      />
    </div>
  );
}