import * as actions from '../actions';

const initialState = {
  guesses: [],
  feedback: 'Make your guess!',
  correctAnswer: Math.round(Math.random() * 100),
  showInfoModal: false
};

const getFeedback = (guess, state) => {
  guess = parseInt(guess, 10);
  if (isNaN(guess)) {
    return 'Please enter a valid number';
  }
  const difference = Math.abs(guess - state.correctAnswer);
  if (difference >= 50) {
    return 'You\'re Ice Cold...';
  }
  else if (difference >= 30) {
    return 'You\'re Cold...';
  }
  else if (difference >= 10) {
    return 'You\'re Warm';
  }
  else if (difference >= 1) {
    return 'You\'re Hot!';
  }
  else {
    return 'You got it!';
  }
}

export const hotColdReducer = (state=initialState, action) => {
  if (action.type === actions.ADD_GUESS) {
    const feedback = getFeedback(action.guess, state);
    return Object.assign({}, state, {
      guesses: [...state.guesses, action.guess],
      feedback
    });
  }
  if (action.type === actions.SET_NEW_GAME) {
    return Object.assign({}, state, action.reset);
  } 
  if (action.type === actions.TOGGLE_INFO_MODAL) {
    const toggle = !state.showInfoModal;
    return Object.assign({}, state, { showInfoModal: toggle }); 
  }
  return state;
}
