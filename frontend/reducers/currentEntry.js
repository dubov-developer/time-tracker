import { INIT, START_ENTRY, ADD_ENTRY, EDIT_ENTRY } from '../constants/actionsTypes.js';
import { Map, List } from 'immutable';

const currentEntryDefault = Map();

export default function currentEntry(state = currentEntryDefault, action) {
  switch(action.type) {
    case INIT:
      return state;
    case START_ENTRY:
      return  state.merge(action.data);
    case ADD_ENTRY:
      return state.clear();
    default:
      return state;
  }
}
