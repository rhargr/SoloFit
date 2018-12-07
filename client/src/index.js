import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import ReactModal from 'react-modal';
import 'rc-time-picker/assets/index.css';

ReactModal.setAppElement('#root');
ReactDOM.render(<App />, document.getElementById('root'));
