import * as actionTypes from './contacts-types';
import { v4 as uuidv4 } from 'uuid';

export const saveAction = data => ({
  type: actionTypes.CREATION,
  payload: {
    id: uuidv4(),
    name: data.name,
    number: data.number,
  },
});

export const deleteAction = contactID => ({
  type: actionTypes.DELETION,
  payload: contactID,
});

export const updateFilter = value => ({
  type: actionTypes.UPDATION,
  payload: value,
});
