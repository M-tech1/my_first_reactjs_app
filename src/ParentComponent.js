// import ParentComponent from './ParentComponent.js';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <ParentComponent />
//     </div>
//   );
// }

// export default App;


import React, { Component } from 'react';
import ChildComponent from './ChildComponent.js';

export class ParentComponent extends Component {  
    render() {
      return (
        <h1>
          <span className="title">I'm the parent component.</span>
          <ChildComponent text={"i'm the 1st child"} />
          <ChildComponent text={"i'm the 2st child"} />
          <ChildComponent text={"i'm the 3st child"} />
        </h1>
      );
    }
  }

export default ParentComponent;