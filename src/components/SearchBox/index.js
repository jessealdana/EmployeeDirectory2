import React from "react";
import "./style.css";


function SearchBox(props) {
  


  return (
    <div className="container text-center">
      <p id="searcher">Use the input box to search this directory by an employee name:</p>
        <div className="form-inline" id="search">
          <input 
              onChange={props.handleInput} type="text"
          />
        </div>  
    </div>
  );
}
export default SearchBox;