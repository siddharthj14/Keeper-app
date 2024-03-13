import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [input, setInput] = useState({ title: "", content: "" });
  const [items, setItem] = useState([]);

  function handleInput(event) {
    const { value, name } = event.target;

    setInput((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
  function addItem() {
    console.log(items);
    setItem((prevValue) => {
      return [input, ...prevValue];
    });
    setInput({ title: "", content: "" });
  }

  function deleteItem(id){
    setItem((prevValue)=>{
      return items.filter((item,index)=>{
        return index !== id;
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea handleInput={handleInput} addItem={addItem} input={input} />
      {items.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          deleteItem={deleteItem}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
