import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown'
import "./style.css";

function Header(props) {



    return (
      <div className="header">
        <h1>North Pole Directory</h1>
        <br />
        <h4>Search by Location</h4>
        <button onClick={() => props.filterEmployees(props.id)}>North Pole Ranch</button>
        <button onClick={() => props.filterHQEmployees(props.id)}>North Pole HQ</button>
        <button onClick={() => props.filterToyEmployees(props.id)}>North Pole Toy Barn</button>
        <h4>Search by Profession</h4>
        <button onClick={() => props.filterBossEmployees(props.id)}>Management</button>
        <button onClick={() => props.filterArtistEmployees(props.id)}>Toy Artists</button>
        <button onClick={() => props.filterDentistEmployees(props.id)}>The Dentist</button> 
        <button onClick={() => props.filterReindeerEmployees(props.id)}>Reindeer</button>        
      </div>     
    )
  }

  export default Header