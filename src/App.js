import logo from './logo.svg';
import './App.css';
import React from 'react';



class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {apiResponce: ""};
  }

  callAPI(){
    fatch("http://localhost:3000/testAPI")
    .then(res => res.text())
    .then(res => this.setState({apiResponce: res}))
  }

  ComponentWillMount(){
    this.callAPI();
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{this.starte.apiResponce} </p>
      </header>
    </div>
  );
}

export default App;
