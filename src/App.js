import React from 'react';
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import SearchBox from "./components/SearchBox/SearchForm"
import employees from "./employees.json";
import "./App.css";

function App() {
  return (
    <Wrapper>
      <h1 className="title">North Pole Employee Directory</h1>
      {/* <SearchBox> */}
        {/* <form className="search">
          <div className="form-group">
            <label htmlFor="search">Search:</label>
          </div>
        </form> */}
      {/* </SearchBox> */}
      {employees.map(employee => (
      <EmployeeCard 
        email={employee.email}
        extension={employee.extension}
        name={employee.name}
        image={employee.image}
        occupation={employee.occupation}
        location={employee.location} 
      />
      ))}
    </Wrapper>
  );
}


export default App;
