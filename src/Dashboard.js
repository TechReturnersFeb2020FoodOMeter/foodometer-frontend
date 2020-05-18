import React, { useState, useEffect } from "react";
import axios from "axios";
import VisionApi from "./Vision/VisionApi";
import "./Dashboard.css";
import Header from "./Header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarTimes,
  faClock,
  faTimesCircle,
} from "@fortawesome/free-regular-svg-icons";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import Snackbar from "@material-ui/core/Snackbar";
import { makeStyles } from "@material-ui/core/styles";
import { SnackbarContent } from "@material-ui/core";


const Dashboard = (props) => {
  const [itemList, setItemList] = useState([]);
  const [sorted, setSorted ] = useState();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const handleClose = () => setOpen(false);


  useEffect(() => {
    axios
      .post(
        "https://k7re4kzp33.execute-api.eu-west-1.amazonaws.com/dev/foodometer/dashboard",
        { user_id: props.user.user_id }
      )
      .then((response) => {
        console.log(response.data);
        setItemList(response.data.sort(getSortOrder("item_name", false)));
      })
      .catch((err) => {
        console.log("failed", err);
      });
  }, [props.user.user_id]);

  const handleDelete = (event, item) => {
    axios
      .delete(
        `https://k7re4kzp33.execute-api.eu-west-1.amazonaws.com/dev/foodometer/delete/${item}`
      )
      .then((response) => {
        console.log(response);
        const filtered_Product_List = itemList.filter((product) => {
          return product.item_id !== item;
        });
        setItemList(filtered_Product_List);
        setMessage("Item deleted from dashboard");
        setOpen(true);
      
      })
      .catch((err) => {
        console.log("Error deleting the product", err);
      });
    event.preventDefault();
  };

  const handleAdd = (item, expiryDate, reminder,category) => {
    console.log("user id is:" + props.user.user_id);
    axios
      .post(
        "https://k7re4kzp33.execute-api.eu-west-1.amazonaws.com/dev/foodometer/add",
        {
          item: item,
          date: expiryDate,
          reminder: reminder,
          user: props.user.user_id,
          category:category,
        }
      )
      .then((response) => {
        const addedItem = response.data;
        const newItems = [...itemList, addedItem];
        setMessage("Item added to dashboard");
        setOpen(true);
        setItemList(newItems);
       
      })
      .catch((err) => {
        console.log("Error adding the item", err);
      });
  };

  const getSortOrder = (prop, desc) => {    
    return function(a, b) {    
       if (a[prop] < b[prop])
            return desc ? 1 : -1;
        if (a[prop] > b[prop])
            return desc ? -1 : 1;
        return 0;  
         
    }    
};    

  const handleSort = (event, items) => {
    let option = event.target.value;

    if(option === '1'){
      setSorted(false);
      let result = items.sort(getSortOrder("expiry_date", true));
      setItemList(result);
     
    }
    else if (option === '2'){
      setSorted(true);
      let result = items.sort(getSortOrder("expiry_date", false));
      setItemList(result);
      
    }
    else {
    }
    event.preventDefault();
  }

  const useStyles = makeStyles((theme) => ({
    snackbar: {
      color: "black",
      [theme.breakpoints.down("xs")]: {
        bottom: 90,
      },
    },
    content: {
      display: "flex",
      justifyContent: "center",
      backgroundColor: "black",
    },
  }));
  const classes = useStyles();

  return (
    <div id="dashboard">
      <div>
        <Header user={props.user.username}/>
        <h3>Your Dashboard</h3>
        <div className="row subheader">
          <div className="col-md-8">
        <h6>Showing {itemList.length} items in your dashboard</h6></div>
        <div className="col-md-3 sort">
        <div class="input-group">
          <div class="input-group-prepend">
            <label class="input-group-text" for="inputGroupSelect01">
              Sort by
            </label>
          </div>
          <select class="custom-select" id="inputGroupSelect01" onChange={
          (e) => {
            handleSort(e, itemList);
          }}>
            <option selected>Item Name</option>
            <option value="1">Expiry Date (Descending)</option>
            <option value="2">Expiry Date (Ascending)</option>
          </select>
        </div>
        </div>
        </div>
       

        {/* <VisionApi handleAdd={handleAdd} /> */}

      
        <div class="card-deck m-4">
          {itemList.map((item, index) => {
            return (
              <div className="col-md-3 py-4">
                <div class="card shadow">
                  {(() => {
                    switch (item.category) {
                      case "Food_Cupboard":
                        return (
                          <img
                            src="https://media.mnn.com/assets/images/2019/04/pantry_items.jpg.653x0_q80_crop-smart.jpg"
                            class="card-img-top"
                            alt="store cupboard"
                          />
                        );
                      case "Cooked_Food":
                        return (
                          <img
                            src="https://www.brewinghappiness.com/wp-content/uploads/2019/03/featured-image-1.jpg"
                            class="card-img-top"
                            alt="store cupboard"
                          />
                        );
                      case "Breakfast":
                        return (
                          <img
                            src="https://i0.wp.com/cdn-prod.medicalnewstoday.com/content/images/articles/325/325150/oatmeal-or-porridge-cereal-in-a-bowl-with-milk-almonds-and-berries.jpg?w=1155&h=1541"
                            class="card-img-top"
                            alt="store cupboard"
                          />
                        );
                      case "Vegetables_Meat":
                        return (
                          <img
                            src="http://4designer.t7yb.net/files/20130105/High-quality-pictures-of-the-vegetables-Still-Life-03-HD-Images-44598.jpg"
                            class="card-img-top"
                            alt="store cupboard"
                          />
                        );
                      default:
                        return (
                          <img
                            src="https://www.brewinghappiness.com/wp-content/uploads/2019/03/featured-image-1.jpg"
                            class="card-img-top"
                            alt="store cupboard"
                          />
                        );
                    }
                  })()}
                  <div class="card-body p-0">
                    <p class="card-text p-1" id="title">
                      {item.item_name}
                      <button
                        type="button"
                        className="float-right"
                        onClick={(e) => {
                          handleDelete(e, item.item_id);
                        }}
                      >
                        <FontAwesomeIcon icon={faTimesCircle} color="#615f5f" />
                      </button>
                      
                    </p>
                    
                    <p class="card-footer bg-transparent m-0 p-0">
                      <div className="row m-0 p-0">
                        <div className="col-6 pt-2">
                          <FontAwesomeIcon
                            icon={faCalendarTimes}
                            className="mb-0 mt-2 ml-2 mr-2"
                          />
                          {moment(item.expiry_date).format("Do MMM")}
                        </div>
                        <div className="col-6 pt-2">
                          <FontAwesomeIcon
                            icon={faClock}
                            className="mb-0 mt-2 ml-2 mr-2"
                          />
                          {item.reminder} Days
                        </div>
                      </div>
                      <div className="row m-0 p-0">
                        <div className="col-6 pb-3 pt-1 pr-0 calendar">
                          &nbsp;&nbsp;Expires
                        </div>
                        <div className="col-6 pb-3 pt-1 pr-0 clock">
                          &nbsp;&nbsp;Reminder
                        </div>
                      </div>
                    </p>
                  </div>
                </div>
              </div>
            );
          })}

          <div className="col-md-3 py-4">
            <div class="card shadow">
            <img src={require("./cyan-canvas.jpg")} class="card-img-top" alt="store cupboard"/>
              <div class="card-body p-0">
                    <p class="card-text p-1" id="title">Add Item</p></div>
           
                <div><button type="button" data-toggle="modal" data-target="#visionapi" id="addButton">

                  <FontAwesomeIcon
                    icon={faPlusCircle}
                    size="3x"
                    color="#17a2b8"
                  /></button>
                 
                </div>
                <p class="bg-transparent p-2"></p>
              
            </div>
          </div>
        </div>
        <div class="modal fade" id="visionapi" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-header"> 
  <button className="close topright m-2" data-dismiss="modal"><FontAwesomeIcon icon={faTimesCircle} size='1x'/></button>
        <VisionApi handleAdd={handleAdd} />
       
       </div></div></div></div>
       <Snackbar
          className={classes.snackbar}
          open={open}
          autoHideDuration={1500}
          onClose={handleClose}
        >
          <SnackbarContent className={classes.content} message={message} />
        </Snackbar>
      </div>
    </div>
  );
};

export default Dashboard;
