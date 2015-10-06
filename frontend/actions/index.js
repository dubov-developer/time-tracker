import * as types from '../constants/actionsTypes.js';

export function init(data) {
  return {
    type: types.INIT,
    data: data
  }
}

export function startEntry(data) {
  return {
    type: types.START_ENTRY,
    data: data
  }
}

export function addEntry(data) {
  return {
    type: types.ADD_ENTRY,
    data: data
  }
}

export function editEntry(data) {
  return {
    type: types.EDIT_ENTRY,
    data: data
  }
}

export function removeEntry(data) {
  return {
    type: types.REMOVE_ENTRY,
    data: data
  }
}
