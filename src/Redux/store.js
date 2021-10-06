import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const contactsInitialState = {
  items: [
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ],
  filter: '',
};

const contactsReducer = (state = contactsInitialState, { type, payload }) => {
  switch (type) {
    case 'phonebook/Save':
      return {
        ...state,
        items: [...state.items, payload],
      };

    case 'phonebook/Delete':
      return {
        ...state,
        items: state.items.filter(item => item.id !== payload),
      };

    case 'phonebook/updateFilter':
      return {
        ...state,
        filter: payload,
      };

    default:
      return state;
  }
};

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

const store = createStore(rootReducer, composeWithDevTools()); // const store = createStore(reducer, { a: 15}); - передача начального состояния (localStorage)

export default store;
