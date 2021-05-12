import React from "react";
import "./style.css";
import EmployeeCard from "../EmployeeCard";



function EmployeeList(props) {
  let employees = props.filteredEmployees.map((employee, i) => {
    return<EmployeeCard 
    id={employee.id}
    key={employee.id}
    email={employee.email}
    extension={employee.extension}
    name={employee.name}
    image={employee.image}
    occupation={employee.occupation}
    location={employee.location}
    />
  })

return(

  <div className="container">
    <div className="row">
      {employees}
    </div>
  </div>
)


}
export default EmployeeList