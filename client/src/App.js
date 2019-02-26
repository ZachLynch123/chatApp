import React, { Component } from 'react';
import io from 'socket.io-client'
import './App.css';




class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      messageContents: [],
      socket: null
    }
  }

  initSocket = () => {
    const clientSocket = io('http://localhost:5000/')
    clientSocket.on('connect',() => {
      console.log('client connected')
      this.setState({
        socket: clientSocket
      })
      console.log(this.state);
      
    })    
  }
  componentWillMount() {
    this.initSocket();
  }

  componentDidMount() {
    this.getMessages();  
  }

  async getMessages() {
    try {
      const data = await fetch('http://localhost:5000/messages');
      const jsonData = await data.json();
      this.setState({
        messageContents: jsonData
      })
      

    } catch(e) {
      console.log(e);
    }
  }

  addMessage(message) {
    console.log(message);
    this.getMessages()
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
      console.log(this.state.socket);

      
    } catch(e) {
      console.log(e);
      
    }
  }


  render() {
    const { messageContents } = this.state;
    
    console.log(this.state);
    
    

    return (
      <div className="App">
        <header className="App-header">
          <p>
            
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
