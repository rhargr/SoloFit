import React, { Component } from "react";
import socketIOClient from "socket.io-client";

import RoomsRepository from "../repositories/rooms";
import MessagesRepository from "../repositories/messages";

class Room extends Component {
  constructor(props) {
    super(props);

    this.roomsRepo = new RoomsRepository();
    this.messagesRepo = new MessagesRepository();

    this.state = {
      response: false,
      endpoint: "http://localhost:3000",
      messages: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    this.messagesRepo.all(roomId).then(messages => {
      console.log(messages);
      this.setState({
        messages
      });
    });
  }

  componentDidMount() {
    this.roomsRepo.all().then(rooms => {
      console.log(rooms);
      this.setState({
        rooms
      });
    });
  }

  handleInputChange(event) {
    console.log("handle input change");
    this.setState = {
      response: "new state: " + event.target.value
    };
    console.log( event.target.value);
  }

  componentDidMount() {
    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAPI", data => this.setState({ response: data }));
  }

  render() {
    const { response } = this.state;
    // return this.state.rooms.map(room => {
    return (
        
      <React.Fragment>
        <section className="module">
          <header className="top-bar">
            <div className="left">
              <i className="fa fa-comment" />
              <h1 className="chat-header">Hangouts</h1>
            </div>

            <div className="right">
              <i className="fa fa-caret-down" />
              <i
                className="fa fa-times"
                style={{ paddingRight: "5px", paddingLeft: "10px" }}
              />
            </div>
          </header>

          <ol className="discussion">
            {this.state.messages.map(message => {
              return (
                // <React.Fragment>
                  <li className="other" key={message.id}>
                    <div className="messages">
                      <p>{message.message}</p>
                      <time dateTime="2009-11-13T20:00">Timothy • 51 min</time>
                    </div>
                  </li>
                //   <li className="self">
                //     <div className="messages">
                //       <p>{response}</p>
                //       <time dateTime="2009-11-13T20:14">37 mins</time>
                //     </div>
                //   </li>
                // </React.Fragment>
              );
            })}
          </ol>

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Send message..."
              aria-label="Send message..."
              aria-describedby="button-addon2"
              value={this.state.message}
              onChange={this.handleInputChange}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                <i className="fa fa-paper-plane" />
              </button>
            </div>
          </div>
        </section>

        <div style={{ textAlign: "center" }}>
          {response ? <p>{response}</p> : <p>Loading...</p>}
        </div>
        </React.Fragment>
    )
// })
}
}

export default Room;
