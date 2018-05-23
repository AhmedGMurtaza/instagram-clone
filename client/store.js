import { createStore, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { hashHistory } from 'react-router';

// import the root reducer
import rootReduxer from './reducers/index';

// default data
import posts from './data/posts';
import comments from './data/comments';

// create an object for the default data
const defaultState = {
  posts,
  comments
};

const store = createStore(rootReduxer,defaultState);

const history = syncHistoryWithStore(hashHistory,store);

export default store;