import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import RoomsRepository from '../repositories/rooms';
import MessagesRepository from '../repositories/messages';
import UserRepository from '../repositories/user';

class Room extends Component {
    constructor(props) {
        super(props);

        this.roomsRepo = new RoomsRepository();
        this.messagesRepo = new MessagesRepository();
        this.userRepo = new UserRepository();

        this.state = {
            response: '',
            endpoint: 'http://localhost:3000',
            messages: [],
            me: {
                id: ''
            }
        };

        this.socket = socketIOClient(this.state.endpoint);
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentDidMount() {
        this.userRepo.me().then((me) => {
            console.log(me);
            this.setState({
                me
            });
        });

        this.socket.on('message', (messagePacket) => {
            this.setState({
                messages: [...this.state.messages, messagePacket],
            });
        });

        this.messagesRepo
            .all({
                roomId: 1,
            })
            .then((messages) => {
                this.setState({
                    messages,
                });
            });

        // this.roomsRepo.all().then(rooms => {
        //     console.log(rooms);
        //     this.setState({
        //       rooms
        //     });
        //   });
    }

    handleMessageSubmission = () => {
        this.socket.emit('clientMessage', {
            message: this.state.response,
            senderId: this.state.me.id,
            roomId: 1,
        });
    };

    handleInputChange(event) {
        this.setState({
            response: event.target.value,
        });
    }

    render() {
        const { response } = this.state;

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
                                style={{
                                    paddingRight: '5px',
                                    paddingLeft: '10px',
                                }}
                            />
                        </div>
                    </header>

                    <ol
                        className="discussion"
                        style={{ height: '300px', overflowY: 'scroll' }}>
                        {this.state.messages.map((message) => {
                            if (message.sender_id === this.state.me.id) {
                                return (
                                    <li className="self" key={message.id}>
                                        <div className="messages">
                                            <p>{message.message}</p>
                                            <time dateTime={message.date}>
                                                37 mins
                                            </time>
                                        </div>
                                    </li>
                                );
                            } else {
                                return (
                                    <li className="other" key={message.id}>
                                        <div className="messages">
                                            <p>{message.message}</p>
                                            <time dateTime={message.date}>
                                                Timothy • 51 min
                                            </time>
                                        </div>
                                    </li>
                                );
                            }
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
                                onClick={this.handleMessageSubmission}
                                className="btn btn-outline-secondary"
                                type="button"
                                id="button-addon2">
                                <i className="fa fa-paper-plane" />
                            </button>
                        </div>
                    </div>
                </section>

                <div style={{ textAlign: 'center' }}>
                    {response ? <p>{response}</p> : <p>Loading...</p>}
                </div>
            </React.Fragment>
        );
        // })
    }
}

export default Room;
