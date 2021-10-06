import { v4 as uuidv4 } from 'uuid';

export const saveAction = data => ({
  type: 'phonebook/Save',
  payload: {
    id: uuidv4(),
    name: data.name,
    number: data.number,
  },
});

export const deleteAction = contactID => ({
  type: 'phonebook/Delete',
  payload: contactID,
});

export const updateFilter = value => ({
  type: 'phonebook/updateFilter',
  payload: value,
});
