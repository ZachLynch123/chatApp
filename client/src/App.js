import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    names: []
  }

  componentDidMount() {
   this.getMessages();

  }

  async getMessages() {
    try {
      const data = await fetch('http://localhost:5000/messages');
      const jsonData = await data.json();
      console.log(jsonData);
      

    } catch(e) {
      console.log(e);
    }
  }

  async sendMessage() {
    try {
      fetch('http://localhost:5000/messages', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'Zek',
          message: 'This is sent from React front-end!',
        })
      });
      
    } catch(e) {
      console.log(e);
      
    }
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button onClick={this.sendMessage}> Hey I'm a button click me!</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
