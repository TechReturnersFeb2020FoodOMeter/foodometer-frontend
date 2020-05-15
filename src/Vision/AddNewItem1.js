import React, { useState } from "react";

function AddNewItem(props) {
  const [itemText, setItemText] = useState("");
  const [expiryDate, setExpiryDate] = useState("2020-03-29");
  const [reminderDate, setReminderDate] = useState("");

  const handleItemTextChange = (event) => {
    setItemText(event.target.value);
  };

  const handleExpiryDateChange = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleReminderDateChange = (event) => {
    setReminderDate(event.target.value);
  };

  const handleAddNewItem = (event) => {
    props.addNewItemsFunc(itemText, expiryDate, reminderDate);
  };
  return (
    <div className="row">
      <div className="col-6">
        <input
          type="text"
          className="form-control"
          placeholder="Item"
          value={itemText}
          onChange={handleItemTextChange}
        />
      </div>
      <div className="col-3">
        <input
          type="date"
          className="form-control"
          value={expiryDate}
          onChange={handleExpiryDateChange}
        />
      </div>
      <div className="col-3">
        <input
          type="date"
          className="form-control"
          value={reminderDate}
          onChange={handleReminderDateChange}
        />
      </div>
      <div className="col-2">
        <button
          class="btn btn-primary"
          type="submit"
          onClick={handleAddNewItem}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default AddNewItem1;
