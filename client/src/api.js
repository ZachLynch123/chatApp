import openSocket from 'socket.io-client';
const socket = openSocket("http://localhost:5000/messages");

const connect = cb => {

    socket.on('message', message => {
        console.log(message);
        cb(message);        
    })
}

export { connect };