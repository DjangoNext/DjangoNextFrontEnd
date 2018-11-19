import * as ActionType from 'actions/submenu'

export const initialState = {
  status: 'noInited'
  data: {}
}

function immutableState (oldState, newState) {
  let state = {}
  Object.keys(oldState).map((key) => {
    state[key] = oldState[key]
  })
  Object.keys(newState).map((key) => {
    state[key] = newState[key]
  })
  return state
}

export default function (state = initialState, action) {
  switch (action.type) {
    case ActionType.SET_POSTS_DATA:
      return immutableState(state, action.payload)

    default:
      return state
  }
}
