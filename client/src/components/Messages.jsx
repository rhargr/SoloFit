import React, { Component } from 'react';
import socketIOClient from "socket.io-client";

class Messages extends Component {
    constructor(props){
        super(props);
        this.state = {
            response: false,
            endpoint: "http://localhost:3000"
          };
        }
        componentDidMount() {
          const { endpoint } = this.state;
          const socket = socketIOClient(endpoint);
          socket.on("FromAPI", data => this.setState({ response: data }));
        }
        render() {
          const { response } = this.state;
          return (
            <div style={{ textAlign: "center" }}>
              {response
                ? <p>
                    {response}
                  </p>
                : <p>Loading...</p>}
            </div>
          );
        }
}

export default Messages;