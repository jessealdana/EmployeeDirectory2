import React, { Component } from "react";
import EmployeeList from "./components/EmployeeList";
import GoButton from "./components/GoButton";
import Wrapper from "./components/Wrapper";
import employees from "./employees.json";
import "./App.css";
import Header from "./components/Header"
import SearchBox from "./components/SearchBox";

// import API from "./API"

class App extends Component {

  state = {
    employees,
    filteredEmployees: [{}],
    searchName: ""
    }

  filterAllEmployees = id => {
    const employees = this.setState({ employees })
  }

  filterEmployees = id => {
    // Filter this.state.employees for employees with a selected location
    const employees = this.state.employees.filter(employee => employee.location === "North Pole Ranch");
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
  };

  filterHQEmployees = id => {
    const employees = this.state.employees.filter(employee => employee.location === "North Pole HQ");
    this.setState({ employees });
  };

  filterToyEmployees = id => {
    const employees = this.state.employees.filter(employee => employee.location === "North Pole Toy Barn");
    this.setState({ employees });
  };

  filterBossEmployees = id => {
    // Filter this.state.employees for employees with a selected occupation
    const employees = this.state.employees.filter(employee => employee.occupation === "Owner");
    // Set this.state.employees equal to the new employees array
    this.setState({ employees });
  };

  filterArtistEmployees = id => {
    const employees= this.state.employees.filter(employee => employee.occupation === "Toy Artist");
    this.setState({ employees });
  };

  filterDentistEmployees = id => {
    const employees = this.state.employees.filter(employee => employee.occupation === "The Dentist");
    this.setState({ employees });
  };

  filterReindeerEmployees = id => {
    const employees = this.state.employees.filter(employee => employee.occupation === "Reindeer");
    this.setState({ employees });
  };

  handleInput = (e) => {
    console.log(e.target.value);
    this.setState({ searchName: e.target.value })
  }

  render() {

    let filteredEmployees = this.state.employees.filter((employee) => {
      return employee.name.toLowerCase().includes(this.state.searchName.toLowerCase()) 
    })

  return (
    <Wrapper>
      <Header 
        filterAllEmployees={this.filterAllEmployees}
        filterEmployees={this.filterEmployees}
        filterHQEmployees={this.filterHQEmployees}
        filterToyEmployees={this.filterToyEmployees}
        filterBossEmployees={this.filterBossEmployees}
        filterArtistEmployees={this.filterArtistEmployees}
        filterDentistEmployees={this.filterDentistEmployees}
        filterReindeerEmployees={this.filterReindeerEmployees}
      />
    
      <GoButton 
        refreshEmployees={this.refreshEmployees}
      />
      <SearchBox
        handleInput={this.handleInput} 
      />
      <EmployeeList
      filteredEmployees={filteredEmployees}>
      </EmployeeList>
        
    </Wrapper>
  );
}
}

export default App
