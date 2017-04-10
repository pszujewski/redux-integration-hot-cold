export const ADD_GUESS = 'ADD_GUESS';
export const SET_NEW_GAME = 'SET_NEW_GAME';
export const TOGGLE_INFO_MODAL = 'TOGGLE_INFO_MODAL';

export const addGuess = guess => ({
  type: ADD_GUESS,
  guess
});

export const setNewGame = () => ({
  type: SET_NEW_GAME,
  reset: {
    guesses: [],
    feedback: 'Make your guess!',
    correctAnswer: Math.round(Math.random() * 100),
    showInfoModal: false
  }
});

export const toggleInfoModal = () => ({
  type: TOGGLE_INFO_MODAL,
});