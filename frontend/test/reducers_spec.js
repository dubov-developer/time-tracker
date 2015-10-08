import { Map, List, fromJS } from 'immutable';
import { expect } from 'chai';

import { init, startEntry, addEntry } from '../actions/';

import currentEntryReducer from '../reducers/currentEntry.js';
import currentEntriesReducer from '../reducers/currentEntries.js';

describe('currentEntryReducer', () => {
  it('handles INIT', () => {

    const state = Map();
    const nextState = currentEntryReducer(state, init(Map({ currentEntries : [Map({}),Map({}),Map({})]})));

    expect(nextState).to.equal(fromJS({
    }));

  });

  it('handles START_ENTRY', () => {

    const state = Map();
    const nextState = currentEntryReducer(state, startEntry( Map({ description : 'Working on registration'})));

    expect(nextState).to.equal(fromJS({
      description: 'Working on registration'
    }));

  });

  it('handles ADD_ENTRY', () => {

    const state = Map({
      description: 'Working on registration'
    });

    const nextState = currentEntryReducer(state, addEntry());

    expect(nextState).to.equal(fromJS({
    }));

  });

});

describe('currentEntriesReducer', () => {
  it('handles INIT', () => {

    const state = List.of();
    const nextState = currentEntriesReducer(state, init(Map({
      currentEntries : List.of(Map({ description: 'First task'}), Map({ description: 'Second task'}))
    })));

    expect(nextState).to.equal(fromJS([
      { description: 'First task'},
      { description: 'Second task'}
    ]));

  });

  it('handles ADD_ENTRY', () => {

    const state = List.of( Map({description: 'First task'}), Map({ description: 'Second task'}));
    const nextState = currentEntriesReducer(state, addEntry(Map({ description: 'Third task'}) ));

    expect(nextState).to.equal(fromJS([
      { description: 'First task'}, 
      { description: 'Second task'},
      { description: 'Third task'}
    ]));

  });
});
