import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList"
import Stats from "./Stats";
import Main from "../componentsvideo/Main";

export default function App() {
    const [items, setItems] = useState([])

    function handleAddItems (item) {
        setItems((items) => [...items, item])
    }
 
    function handleDeleteItem(id) {
        setItems((items) => items.filter((item) => item.id !==id))
    }

function handleToggleItem(id) {
    setItems ((items) => 
      items.map((item) => 
        item.id === id ? { ...item, packed: !item.packed }
          : item
      )
    )
}
  function handleClearList() {
  const confirmed = window.confirm(
    "დარწმუნებული ხარ რომ გსურს ყველა არჩეულის წაშლა?"
  )

    if (confirmed) setItems([])
  }

    return (
    <div className="app">
        
        <Logo />
        <Main />
        <Form onAddItems = {handleAddItems} />
        <PackingList 
         items = {items} 
         onDeleteItem={handleDeleteItem} 
         onToggleItem={handleToggleItem}
         onClearList={handleClearList}
         />
        <Stats items = {items} />
    </div>
    )
}


