import React, { Component } from 'react';
import { render } from 'react-dom';
import * as classService from '../services/classes';
import BGPic from '../images/BG.png';
import DataInjectable from '../injectables/data';
import ServiceRepository from '../repositories/service';
import TrainerRepository from '../repositories/trainer';
import { upperFirst } from 'lodash';

class New extends Component {
    constructor(props) {
        super(props);
        this.serviceRepo = new ServiceRepository();
        this.trainerRepo = new TrainerRepository();
        this.dataInj = new DataInjectable();

        this.state = {
            services: [],
            states: [],
            user: {
                name: '',
                age: '',
                email: '',
                hash: '',
                address: {
                    street1: '',
                    street2: '',
                    city: '',
                    state: '',
                    zip: '',
                },
                services: [],
            },
        };
    }

    componentDidMount() {
        this.serviceRepo.all().then((services) => {
            const states = this.dataInj.states;
            states.unshift({
                code: '',
                name: '- Select State -',
            });

            this.setState({
                services,
                states,
            });
        });
    }

    handleUserChange = (e) => {
        const inputName = e.target.name;
        const value = e.target.value;

        this.setState({
            user: {
                ...this.state.user,
                [inputName]: value,
            },
        });
    };

    handleAddressChange = (e) => {
        const inputName = e.target.name;
        const value = e.target.value;

        this.setState({
            user: {
                ...this.state.user,
                address: {
                    ...this.state.user.address,
                    [inputName]: value,
                },
            },
        });
    };

    handleServiceChange = (e) => {
        const serviceId = +e.target.value;

        if (this.state.user.services.includes(serviceId)) {
            return;
        }

        this.setState({
            user: {
                ...this.state.user,
                services: [...this.state.user.services, serviceId],
            },
        });
    };

    submit = () => {
        const { user } = this.state;

        this.trainerRepo.create(user).then((id) => {});
    };

    render() {
        return (
            <div
                style={{
                    minHeight: '100vh',
                    backgroundImage: `url(${BGPic})`,
                    backgroundSize: 'cover',
                    padding: '4em 5em',
                }}>
                <div
                    style={{
                        color: 'white',
                        padding: '0 4em 4em',
                    }}>
                    <h3>
                        "Combine your natural ability with a mission to help
                        people and you will have a rich, fulfilling life"
                    </h3>
                    <h4>-Bryan Krahn, Physique Coach</h4>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            position: 'relative',
                            top: '200px',
                            flexDirection: 'column',
                            maxWidth: '900px',
                            top: '125p',
                        }}>
                        <div>
                            <ul className="nav nav-tabs">
                                <li className="nav-item">
                                    <a className="nav-link" href="/Sign-Up">
                                        Client
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        href="/Sign-Up-Trainer">
                                        Trainer
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div
                            style={{
                                maxWidth: '900px',
                                padding: '25px',
                                borderRadius: '3px',
                                backgroundColor: 'lightGray',
                                position: 'relative',
                            }}>
                            <h1>Trainer</h1>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputEmail4" />
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputName"
                                        name="name"
                                        placeholder="Name"
                                        onChange={this.handleUserChange}
                                    />
                                </div>

                                <div className="form-group col-md-6">
                                    <label htmlFor="inputEmail4" />
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputAge"
                                        name="age"
                                        placeholder="Age"
                                        onChange={this.handleUserChange}
                                    />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputEmail4" />
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="inputEmail4"
                                        name="email"
                                        placeholder="Email"
                                        onChange={this.handleUserChange}
                                    />
                                </div>
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputPassword4" />
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="inputPassword4"
                                        name="hash"
                                        placeholder="Password"
                                        onChange={this.handleUserChange}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputAddress" />
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputAddress1"
                                    name="street1"
                                    placeholder="Street 1"
                                    onChange={this.handleAddressChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="inputAddress" />
                                <input
                                    type="text"
                                    className="form-control"
                                    id="inputAddress2"
                                    name="street2"
                                    placeholder="Street 2"
                                    onChange={this.handleAddressChange}
                                />
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label htmlFor="inputCity" />
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputCity"
                                        name="city"
                                        placeholder="City"
                                        onChange={this.handleAddressChange}
                                    />
                                </div>
                                <div className="form-group col-md-4">
                                    <label htmlFor="inputState" />
                                    <select
                                        id="inputState"
                                        name="state"
                                        className="form-control"
                                        onChange={this.handleAddressChange}>
                                        {this.state.states.map((state) => {
                                            return (
                                                <option
                                                    key={state.code}
                                                    value={state.code}>
                                                    {state.name}
                                                </option>
                                            );
                                        })}
                                    </select>
                                </div>
                                <div className="form-group col-md-2">
                                    <label htmlFor="inputZip" />
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputZip"
                                        name="zip"
                                        placeholder="Zip"
                                        onChange={this.handleAddressChange}
                                    />
                                </div>
                            </div>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    maxWidth: '100%',
                                }}>
                                <div
                                    className="form-group col-md-6"
                                    style={{
                                        flex: '1',
                                        maxWidth: '100%',
                                        padding: '0px',
                                    }}>
                                    <label htmlFor="inputCity" />
                                    <textarea
                                        type="text-area"
                                        className="form-control"
                                        id="input"
                                        placeholder="About Me"
                                    />
                                </div>

                                <div className="form-group" />
                            </div>
                            <div>
                                <h5>Select Services Offered</h5>
                                <div className="row">
                                    {this.state.services.map((service) => {
                                        return (
                                            <div
                                                className="col-md-4 col-sm-6"
                                                key={service.id}>
                                                <input
                                                    type="checkbox"
                                                    value={service.id}
                                                    onChange={
                                                        this.handleServiceChange
                                                    }
                                                />
                                                <span>
                                                    {upperFirst(service.name)}
                                                </span>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <button
                                onClick={this.submit}
                                className="btn btn-primary">
                                Create Account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default New;
