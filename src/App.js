import React, {Component, Fragment} from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from "./Header";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component{
  render(){
    return(
      <Fragment>
        <Header />
        <br />
        <div className="container input-group mb-3 col-6">
          <input className="searchBox form-control" type="text" placeholder="Enter City Name..." />
          <button className="searchButton" type="submit">Search</button>
        </div>
      </Fragment>
  )}
}

export default App;
