import React, { Component } from 'react';
import { render } from 'react-dom';
import * as classService from '../services/classes';

class Profile extends Component {
    
    constructor(props) {
        super(props);
    }

    // async componentDidMount() {
    //     // This is here as an example. Delete it if you wish.
    //     try {
    //         let classes = await classService.all();
    //         console.log(classes);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    render() {
        return <h1>Profile</h1>;
    }
}

export default Profile;