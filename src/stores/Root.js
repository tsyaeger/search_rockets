import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import launchCollection from './LaunchCollectionReducer';
import rocketCollection from './RocketReducer';

const rootReducer = combineReducers({
  launchCollection,
  rocketCollection
});

const store = createStore(
    rootReducer,
    composeWithDevTools()
);

export default store;
