import { ACTIONS } from '../actions/Rockets';

const initialState = {
  rocket: {},
  showRocket: false,
  fetching: false
};

const actionHandlers = {
  [ACTIONS.REQUEST_ROCKET]: ({ state }) => ({
    ...state,
    fetching: true
  }),
  [ACTIONS.RECEIVE_ROCKET]: ({ state, action }) => ({
    ...state,
    fetching: false,
    rocket: action.payload.rocket,
    showRocket: true
}),
    [ACTIONS.CLOSE_POPUP]: ({ state }) => ({ //just use initial state here
      ...state,
      showRocket: false,
      rocket: {}
    })
};

export default (state = initialState, action) =>
  actionHandlers[action.type] ? actionHandlers[action.type]({ state, action }) : state;
