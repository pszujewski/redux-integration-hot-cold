import React from 'react';
import ReactDOM from 'react-dom';

import Game from './components/game';
import './reset.css';
import './index.css';

import store from './store';
import {addGuess, setNewGame, toggleInfoModal} from './actions';

store.dispatch(addGuess(42));
store.dispatch(addGuess(33));
store.dispatch(toggleInfoModal());
store.dispatch(toggleInfoModal());
console.log(store.getState());

store.dispatch(setNewGame());
console.log(store.getState());

ReactDOM.render(
    <Game />,
    document.getElementById('root')
);
