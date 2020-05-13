import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VisionApi from './Vision/VisionApi';

const Dashboard = props => {
    const [itemList, setItemList] = useState([]);
    useEffect(()=>{
      axios.post("https://k7re4kzp33.execute-api.eu-west-1.amazonaws.com/dev/foodometer/dashboard", {user_id : props.user.user_id })
      .then(response =>{
        console.log(response.data);
        setItemList(response.data);
      })
      .catch(err=>{
        console.log("failed",err);
      });
    },[props.user.user_id])

    const handleDelete = (event, item) =>{
        axios.delete(`https://k7re4kzp33.execute-api.eu-west-1.amazonaws.com/dev/foodometer/delete/${item}`)
        .then(response=>{
            console.log(response);
            const filtered_Product_List = itemList.filter(product =>{
                  return product.item_id !== item;
                  
            });
            setItemList(filtered_Product_List);
        })
        .catch(err =>{
            console.log("Error deleting the product",err);
        })
        event.preventDefault();
    }

    const handleAdd = (item, expiryDate, reminder) => {
        console.log ("user id is:" + props.user.user_id);
        axios.post('https://k7re4kzp33.execute-api.eu-west-1.amazonaws.com/dev/foodometer/add',{
          item:item,
          date:expiryDate,
          reminder:reminder,
          user:props.user.user_id
        })
        .then(response=>{
          const addedItem = response.data;
          const newItems = [...itemList, addedItem];
          setItemList(newItems);
        })
        .catch(err=>{
          console.log("Error adding the item",err);
        })  
      }

  return (
    <div>
      <div>
        {/* <h1>Dashboard</h1>
        <h1>Status: {props.loggedInStatus}</h1>
        <h5>User id: {props.user.user_id}</h5> */}
        <VisionApi handleAdd={handleAdd}/> 
        <div className="row dashboard">
                <div className="col-6 col-md-4 my-3" >
                 <h3>Product</h3>
                </div>
                <div className="col-6 col-md-2 my-3">
                <h3>Expiry Date</h3> 
                </div>
                <div className="col col-md-3 my-3">
                <h3>Reminder</h3> 
                </div>
                <div className="col col-md-3 my-3">
                <h3>Delete Item</h3> 
                    </div>
                    </div>
        { itemList.map(item =>{
            return(
        // eslint-disable-next-line no-unused-expressions
        <div className="row dashboard">
                <div className="col-6 col-md-4 my-3" >
                 {item.item_name}
                </div>
                <div className="col-6 col-md-2 my-3">
                   {item.expiry_date}
                </div>
                <div className="col col-md-3 my-3">
                   {item.reminder}
                </div>
                <div className="col col-md-3 my-3">
                    <button type="button" className="btn btn-primary" onClick={(e) => {
     handleDelete(e, item.item_id)
}}>Delete</button>
                </div>
            </div>);
            })}
      </div>
    </div>
  );
};

export default Dashboard;