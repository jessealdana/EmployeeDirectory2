// import React, { Component } from "react";
// import SearchForm from "../components/SearchBox/SearchForm";
// import SearchResults from "../components/SearchBox/ResultList";


// class Search extends Component {
//   state = {
//     search: "",
//     name: [],
//     occupation: [],
//     address: [],
//     results: [],
//     error: ""
//   };

// 
//   componentDidMount() {
//     this.search.getBaseemployeesList()
//       .then(res => this.setState({ employees: res.data.message }))
//       .catch(err => console.log(err));
//   }

//   handleInputChange = event => {
//     this.setState({ search: event.target.value });
//   };

//   handleFormSubmit = event => {
//     event.preventDefault();
//     this.search.getNameOfemployee(this.state.search)
//       .then(res => {
//         if (res.data.status === "error") {
//           throw new Error(res.data.message);
//         }
//         this.setState({ results: res.data.message, error: "" });
//       })
//       .catch(err => this.setState({ error: err.message }));
//   };
//   render() {
//     return (
//       <div>
//         <Container>
//           <h1 className="text-center">Search By Name, Occupation or Location.</h1>
//           <SearchForm
//             handleFormSubmit={this.handleFormSubmit}
//             handleInputChange={this.handleInputChange}
//             employees={this.state.employees}
//           />
//           <SearchResults results={this.state.results} />
//         </Container>
//       </div>
//     );
//   }
// }

// export default Search;