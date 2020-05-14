import React, { useState, useEffect } from "react";
// import axios from "axios;";
import Item from "./Item";
import AddNewItem from "./AddNewItem";
import App from "./App";

function DataExtraction() {
  const [items, setItems] = useState([
    {
      text: "nutella",
      expiryDate: "2021-07-10",
      reminderDate: "2021-01-10",
    },
    {
      text: "coffe",
      expiryDate: "2023-10-10",
      reminderDate: "2021-09-10",
    },
    {
      text: "Milk",
      expiryDate: "2020-05-17",
      reminderDate: "2020-05-15",
    },
    {
      text: "Salmon",
      expiryDate: "2020-05-17",
      reminderDate: "2020-05-15",
    },
  ]);

  const deleteItem = (id) => {
    const filteredItems = items.filter((item) => {
      return item.id !== id;
    });
    setItems(filteredItems);
  };

  const AddNewItem = (text, expiryDate, reminderDate) => {
    const newItem = {
      text: text,
      expiryDate: expiryDate,
      reminderDate: reminderDate,
      id: Math.random() * 1000,
    };

    const newItems = [...items, newItem];

    setItems(newItems);
  };

  return (
    <div className="DataExtraction">
      {/* <Header /> */}
      <main>
        <div className="container">
          <AddNewItem addNewItemsFunc={AddNewItem} />
          {items.map((item) => {
            return (
              <Item
                key={item.id}
                deleteItemFunc={deleteItem}
                text={item.text}
                expiryDate={item.expiryDate}
                reminderDate={item.reminderDate}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default DataExtraction;
