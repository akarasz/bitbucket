import React from 'react';
import ReactDOM from 'react-dom';
import Bitpuzzle from './Bitpuzzle';
import './index.css';

ReactDOM.render(
    <Bitpuzzle width={5} height={5} density={.5}/>,
    document.getElementById('root')
);
