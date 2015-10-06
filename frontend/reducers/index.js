import { combineReducers } from 'redux';

import currentEntry from './currentEntry';
import currentEntries from './currentEntries';

const rootReducer = combineReducers({
  currentEntry,
  currentEntries
});

export default rootReducer;
