import React from "react";
import "./style.css";

function GoButton(props) {

  function refreshPage() {
    window.location.reload(false);
  }


  return <div className="goButton">{props.children}
        <button onClick={refreshPage}>Refresh All Employees</button>
  </div>;
}

export default GoButton;