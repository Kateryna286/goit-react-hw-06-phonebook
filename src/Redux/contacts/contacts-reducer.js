import { combineReducers } from 'redux';
import * as actionTypes from './contacts-types';

const itemsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const itemsReducer = (state = itemsInitialState, { type, payload }) => {
  switch (type) {
    case actionTypes.CREATION:
      return [...state, payload];

    case actionTypes.DELETION:
      return state.filter(item => item.id !== payload);

    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case actionTypes.UPDATION:
      return payload;

    default:
      return state;
  }
};

// contactsReducer:

export default combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
