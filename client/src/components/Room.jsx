import React, { Component } from 'react';
import socketIOClient from 'socket.io-client';
import RoomsRepository from '../repositories/rooms';
import MessagesRepository from '../repositories/messages';
import UserRepository from '../repositories/user';
import { checkLogin } from '../services/user';
import { isEmpty } from 'lodash';

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
                id: '',
            },
            isLoggedIn: false,
            isClosed: false,
        };

        this.socket = socketIOClient(this.state.endpoint);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    componentDidMount() {
        checkLogin()
            .then((isLoggedIn) => {
                if (!isLoggedIn) {
                    throw new Error();
                }

                this.socket.on('message', (messagePacket) => {
                    this.setState({
                        messages: [...this.state.messages, messagePacket],
                    });
                });

                return Promise.all([
                    this.userRepo.me(),
                    this.messagesRepo.all({
                        roomId: 1,
                    }),
                ]);
            })
            .then(([me, messages]) => {
                console.log(me);
                this.setState(
                    {
                        isLoggedIn: true,
                        me,
                        messages,
                    },
                    () => {
                        this.messagesEl = document.getElementById('messages');
                    },
                );
            });
    }

    handlePopup = () => {
        if (!this.state.showChat) {
            this.snapToBottom();
        }

        this.setState({
            showChat: !this.state.showChat,
        });
    };

    handleClose = () => {
        if (this.state.isClosed) {
            return;
        }

        this.setState({
            isClosed: true,
        });
    };

    snapToBottom = () => {
        this.messagesEl.scrollTop = this.messagesEl.scrollHeight;
    };

    handleMessageSubmission = () => {
        if (isEmpty(this.state.response)) {
            return;
        }

        this.socket.emit('clientMessage', {
            message: this.state.response,
            senderId: this.state.me.id,
            roomId: 1,
        });

        this.setState({
            response: '',
        });

        this.snapToBottom();
    };

    handleInputChange(event) {
        this.setState({
            response: event.target.value,
        });
    }

    render() {
        if (!this.state.isLoggedIn) {
            return null;
        }

        return (
            <React.Fragment>
                <section
                    className={
                        'module messaging-container' +
                        (this.state.showChat ? ' show' : '')
                    }
                    id="chatBox"
                    style={{
                        bottom: this.state.isClosed ? '-27em' : '-23em',
                    }}>
                    <header className="top-bar">
                        <div className="left">
                            <i className="fa fa-comment" />
                            <h1 className="chat-header">
                                {this.state.me.id === 2221 ? 'Calley' : 'Ash'}
                            </h1>
                        </div>
                        <div className="right">
                            <button
                                className="chat-buttons"
                                onClick={this.handlePopup}>
                                <i className="fa fa-caret-down" />
                            </button>
                            <button
                                className="chat-buttons"
                                onClick={this.handleClose}>
                                <i className="fa fa-times" />
                            </button>
                        </div>
                    </header>
                    <ol
                        id="messages"
                        className="discussion"
                        style={{ height: '300px', overflowY: 'scroll' }}>
                        {this.state.messages.map((message) => {
                            if (message.sender_id === this.state.me.id) {
                                return (
                                    <li className="self" key={message.id}>
                                        <div className="messages">
                                            <p>{message.message}</p>
                                            {/* <time dateTime={message.date}>{message.date}</time> */}
                                        </div>
                                    </li>
                                );
                            } else {
                                return (
                                    <li className="other" key={message.id}>
                                        <div className="messages">
                                            <p>{message.message}</p>
                                            {/* <time dateTime={message.date}>{message.date}</time> */}
                                        </div>
                                    </li>
                                );
                            }
                        })}
                    </ol>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Send message..."
                            aria-label="Send message..."
                            aria-describedby="button-addon2"
                            value={this.state.response}
                            onChange={this.handleInputChange}
                        />
                        <div className="input-group-append">
                            <button
                                onClick={this.handleMessageSubmission}
                                className="btn btn-outline-secondary submit-button"
                                type="button"
                                style={{ backgroundColor: 'gainsboro' }}
                                id="button-addon2">
                                <i className="fa fa-paper-plane" />
                            </button>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}

export default Room;
