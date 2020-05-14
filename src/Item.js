import React from "react";
import moment from "moment";

const Item = (props) => {
  const handleDeleteClick = () => {
    props.deleteItemFunc(props.id);
  };

  return (
    <div className="row taskRow">
      <div className="col-12 col-md-6">{props.text}</div>

      <div className="col-4 col-md-2">
        {moment(props.expiryDate).format("ddd Do MMMM YYYY")}
      </div>

      <div className="col-4 col-md-2">
        {moment(props.reminderDate).format("ddd Do MMMM YYYY")}
      </div>

      <div className="col-6 col-md-2">
        <button className="btn btn-danger" onClick={handleDeleteClick}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Item;
