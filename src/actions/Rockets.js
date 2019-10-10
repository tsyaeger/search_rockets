import RocketService from '../services/RocketService';

export const ACTIONS = {
  REQUEST_ROCKET: 'REQUEST_ROCKET',
  RECEIVE_ROCKET: 'RECEIVE_ROCKET',
  SHOW_POPUP: 'SHOW_POPUP',
  CLOSE_POPUP: 'CLOSE_POPUP'
};

export const requestRocket = () => ({
  type: ACTIONS.REQUEST_ROCKET
});

const receiveRocket = response => ({
  type: ACTIONS.RECEIVE_ROCKET,
  payload: {
    rocket: response.data,
    showRocket: true
  }
});

export const closePopup = () => ({
    type: ACTIONS.CLOSE_POPUP,
    payload: {
        showRocket: false,
        rocket: {}
    }
});



export const removeRocketPopup = ({dispatch}) => {
    dispatch(closePopup())
}

export const fetchRocket = (dispatch, id) => {
  dispatch(requestRocket());
  return RocketService.get(id).then(response => dispatch(receiveRocket(response)));
};

const shouldFetchRocket = rocketCollection => !rocketCollection || !rocketCollection.fetching;

export const fetchRocketIfNeeded = ({ dispatch, rocketCollection, id }) =>
  shouldFetchRocket(rocketCollection) && fetchRocket(dispatch, id);
