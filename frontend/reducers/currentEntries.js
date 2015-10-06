import { INIT, START_ENTRY, ADD_ENTRY, EDIT_ENTRY } from '../constants/actionsTypes.js';
import { Map, List } from 'immutable';

const currentEntriesDefault = List.of();

export default function currentEntries(state = currentEntriesDefault , action) {
  switch(action.type) {
    case ADD_ENTRY:
      state.push(action.data);
    default:
      return state;
  }
}
