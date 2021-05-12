import React, { Component } from "react";
import SearchData from "./SearchData";
import Nav from "./Nav";
import "./style.css";


export default class SearchRes extends Component {
    state = {
        employees: [{}],
        filteredEmployees: [{}]
    }


headings = [
    {name: "Name"},
    {name: "Location"}
]

handleSort = key => {
    if (this.state.order === "descend") {
        this.setState({
            order: "ascend"
        })
    } else {
        this.setState({
            order: "descend"
        })
    }


    const compareFnc = (a, b) => {
        if (this.state.order === "ascend") {
          // account for missing values
          if (a[heading] === undefined) {
            return 1;
          } else if (b[heading] === undefined) {
            return -1;
          }
          // numerically
          else if (heading === "name") {
            return a[heading].first.localeCompare(b[heading].first);
          } else {
            return a[heading] - b[heading];
          }
        } else {
          // account for missing values
          if (a[heading] === undefined) {
            return 1;
          } else if (b[heading] === undefined) {
            return -1;
          }
          // numerically
          else if (heading === "name") {
            return b[heading].first.localeCompare(a[heading].first);
          } else {
            return b[heading] - a[heading];
          }
        }
  
      }
      const sortedUsers = this.state.filteredUsers.sort(compareFnc);
      this.setState({ filteredUsers: sortedUsers });
    }

handleSearchChange = event => {
    console.log(event.target.value);
    const filter = event.target.value;
    const filteredList = this.state.employees.filter(item => {
        let values = Object.values(item)
        .join("")
        .toLowerCase();
        return values.indexOf(filter.toLowerCase()) !== -1;
    });
    this.setState({ filteredEmployees: filteredList });
}

componentDidMount() {
    API.getEmployees().then(results => {
        this.setState({
            employees: results.data.results,
            filteredEmployees: results.data.results
        });
    });
}

render() {
    return (
        <>
        <Nav handleSearchChange={this.handleSearchChange} />
        <div className="search-res">
            <SearchData
                headings={this.headings}
                employees={this.state.filteredEmployees}
                handleSort={this.handleSort}
            />
        </div>
        </>
        );
    }
}