import React from 'react';
import {connect} from 'react-redux';
import {addGuess} from '../actions';

export function GuessForm(props) {
    let inputRef;
    function onGuess(e) {
        e.preventDefault();
        console.log(inputRef.id);
        const newGuess = inputRef.value;
        if (newGuess !== "" || newGuess !== " ") {
            props.dispatch(addGuess(newGuess));
            inputRef.value = '';
        }
    }

    return (
        <form onSubmit={e => onGuess(e)}>
            <label htmlFor="userGuess">Enter your Guess</label>
            <input type="text" name="userGuess" id="userGuess"
                className="text" maxLength="3" autoComplete="off"
                placeholder={Math.round(Math.random() * 100)} required
                ref={input => inputRef = input} />
            <input type="submit" id="guessButton" className="button" name="submit" value="Guess"/>
        </form>
    );
};

export default connect()(GuessForm);
