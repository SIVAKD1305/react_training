import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useState } from 'react';
export default function App(){
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
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => id !== item.id)
    setItems(listItems)
  };
  return(
    <div className="App">
      <Header  />
      <Content 
      items = {items}
      handelChange = {handelChange}
      handleDelete = {handleDelete}
      />
      <Footer
      length = {items.length}
      />
    </div>
  );
}