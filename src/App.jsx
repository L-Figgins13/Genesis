import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import GamesList from './GamesList.jsx';

const contentNode = document.getElementById('contents');



ReactDom.render(<GamesList />, contentNode);

if(module.hot){
    module.hot.accept();
}