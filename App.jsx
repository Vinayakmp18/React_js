// import React from "react";
// import Nav from './Compnents/Nav';
// import "./global.css"

// const App = ()=> {
//     return (
//         <Nav/>
//     )
// }

// export default App

// import React from 'react'
// import ParentDrilling from './PropDrilling/ParentDrilling';

// const App = () => {
//   return (
//     <div>
//         <ParentDrilling data={100} />
//     </div>
//   )
// }

// export default App

// import React from 'react'
// import Cours from './Boolean/Cours';

// const App = () => {
//   return (
//     <div>
//       <Cours courseDetails={{
//         courseName : "Java Full Stack" ,
//         courseDuration : "3 months",
//         courseAvail : true
//       }} />
//     </div>
//   )
// }

// export default App

// import React, { Component } from "react";
// class App extends Component
// {
//   constructor(){
//     super()
//     this.state={
//       username : "RAJ"
//     }
//   }
//   render(){
//     return(
//       <h1>{this.state.username}</h1>
//     )
//   }
// }
// export default App

// import React from "react";
// import { Component } from 'react';
// class App extends Component
// {
//   state={
//     username : "VIN"
//   }
//   render(){
//     return(
//       <h1>{this.state.username}</h1>
//     )
//   }
// }
// export default App

// import React, { Component } from "react";
// class App extends Component
// {
//   state={
//     subject : "REACT JS" ,
//     skills : ["HTML","CSS","JS"]
//   }
//   render(){
//     return(
//       <>
//         <h1>{this.state.subject}</h1>
//         <ul>
//           {this.state.skills.map((x)=>{
//             return <li>{x}</li>
//           })}
//         </ul>
//       </>
//     )
//   }
// }
// export default App

import React, { Component } from 'react'
import JSON from "./StudentTable/users.json"
import Users from './StudentTable/Users.jsx';
export default class App extends Component {
  constructor(){
    super()
    this.state={
      json : JSON
    }
  }
  
  render() {
    return (
      <div>
          <Users data={this.state.json} />
      </div>
    )
  }
}
