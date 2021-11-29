import './App.css';

import React, { Component } from 'react'
// import Get_Post from './components/Get_Post';
import Table_Post from './components/Table_Post';

export default class App extends Component {

  defultNumber=1;
  state = {id:this.defultNumber};

  render() {
    return (
      <div className="App">
        {/* <input 
        defaultValue = {this.defultNumber}
        type="number"
        onChange={(evt)=>this.setState({id:evt.target.value})}
         />
        <Get_Post id={this.state.id}/> */}
        <Table_Post/>
      </div>
    )
  }
}



// import "./App.css";

// import React, { Component } from "react";

// class App extends Component {
//   state = {
//     persons: [
//       { id: 1, first: "shmuel",last : "moche" },
//       { id: 2, first: "haim", last: "arka" },
//       { id: 3, first: "ezra", last: "dasa" },
//     ],
//     personToEdit: { first: "", last: "" },
//     inputFirst: "",
//     inputLast: "",
//   };
//   render() {
//     const { persons, personToEdit, inputFirst, inputLast } = this.state;
//     const personsElement = persons.map((person) => (
//       <div key={person.id}>
//         <p>
//           first : {person.first} ,last : {person.last}
//         </p>
//         <button
//           onClick={() => {
//             const newPersons = persons.filter((item) => item.id !== person.id);
//             this.setState({ persons: newPersons });
//           }}
//         >
//           Delete
//         </button>
//         <button
//           onClick={() => {
//             this.setState({ personToEdit: person });
//           }}
//         >
//           Edit
//         </button>
//       </div>
//     ));
//     return (
//       <div className="App">
//         <div>
//           first name{" "}
//           <input
//             onChange={(evt) => {
//               this.setState({ inputFirst: evt.target.value });
//             }}
//             defaultValue={personToEdit.first}
//           />
//           <br />
//           last name{" "}
//           <input
//             onChange={(evt) => {
//               this.setState({ inputLast: evt.target.value });
//             }}
//             defaultValue={personToEdit.last}
//           />
//           <br />
//           <button
//             onClick={() => {
//               let person = persons.find((it) => it.id === personToEdit.id);
//               person.last = inputLast;
//               person.first = inputFirst;
//               this.setState({ persons });
//             }}
//           >
//             Update
//           </button>
//         </div>
//         {personsElement}
//       </div>
//     );
//   }
// }

// export default App;
