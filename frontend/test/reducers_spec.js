import { Map, fromJS } from 'immutable';
import { expect } from 'chai';

import { START_ENTRY, ADD_ENTRY } from '../constants/actionsTypes.js';

import currentEntryReducer from '../reducers/currentEntry.js';

describe('currentEntryReducer', () => {

  it('handles START_ENTRY', () => {

    const state = Map();
    const action = {type: START_ENTRY, data: { description : 'Working on registration'}};
    const nextState = currentEntryReducer(state, action);

    expect(nextState).to.equal(fromJS({
      description: 'Working on registration'
    }));

  });

  it('handles ADD_ENTRY', () => {

    const state = Map({
      description: 'Working on registration'
    });
    const action = {type: ADD_ENTRY};
    const nextState = currentEntryReducer(state, action);

    expect(nextState).to.equal(fromJS({
    }));

  });

});
