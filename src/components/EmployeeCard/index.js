import React from "react";
import "./style.css";

function EmployeeCard(props) {
  return (
    <div className="card mb-3">
      <div className="card border">
       <div className="row no-gutters">
          <div className="col-md-4 img-container">
              <img  alt={props.name} src={props.image} />
          </div>
          <div className="col-md-4">
              <div className="card-body">
                <ul>
                    <li>
                      <strong>Email:</strong> {props.email}
                    </li>
                    <li>
                      <strong>Extension:</strong> {props.extension}
                    </li>
                </ul>
              </div>
          </div>
          <div className="col-md-4">
              <div className="card-body nameCard">
                <ul>
                    <li>
                      <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                      <strong>Occupation:</strong> {props.occupation}
                    </li>
                    <li>
                      <strong>Address:</strong> {props.location}
                    </li>
                </ul>
              </div>
          </div>
        </div>
      </div>
     </div>


);

  
}

export default EmployeeCard;