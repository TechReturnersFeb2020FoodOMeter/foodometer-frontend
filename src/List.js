import React from "react";


function List(props) {
    
    return (
        <div>
        <h2> List Page</h2>
        <h1>{props.loggedInStatus}</h1>
        </div>
    );
}

export default List;