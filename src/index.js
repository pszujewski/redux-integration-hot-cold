import React from 'react';
import ReactDOM from 'react-dom';

import Game from './components/game';
import './reset.css';
import './index.css';

import {Provider} from 'react-redux';
import store from './store';

// store.dispatch(addGuess(42));
// store.dispatch(addGuess(33));
// store.dispatch(toggleInfoModal());
// store.dispatch(toggleInfoModal());
// console.log(store.getState());

// store.dispatch(setNewGame());
// console.log(store.getState());

ReactDOM.render(
    <Provider store={store}>
        <Game />
    </Provider>,
    document.getElementById('root')
);
